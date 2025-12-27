import Room from "../models/Room.js";
import Booking from "../models/Booking.js";

export const getAvailableRooms = async (req, res) => {
  const { checkIn, checkOut } = req.query;

  const bookedRooms = await Booking.find({
    status: "confirmed",
    $or: [
      {
        checkIn: { $lt: new Date(checkOut) },
        checkOut: { $gt: new Date(checkIn) },
      },
    ],
  }).select("room");

  const bookedRoomIds = bookedRooms.map((b) => b.room);

  const rooms = await Room.find({
    _id: { $nin: bookedRoomIds },
  });

  res.json({ success: true, rooms });
};

export const getRoomDetails = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate("homestay");
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json({ success: true, room });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getRoomsByHomestay = async (req, res) => {
  try {
    const rooms = await Room.find({ homestay: req.params.homestayId });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const createRoom = async (req, res) => {
  try {
    const {
      homestay,
      roomType,
      name,
      pricePerNight,
      maxGuests,
      amenities,
      description,
      images,
    } = req.body;
    const newRoom = new Room({
      homestay,
      roomType,
      name,
      pricePerNight,
      maxGuests,
      amenities,
      description,
      images,
      status: "pending",
    });
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    const {
      roomType,
      name,
      pricePerNight,
      maxGuests,
      amenities,
      description,
      images,
    } = req.body;
    if (roomType) room.roomType = roomType;
    if (name) room.name = name;
    if (pricePerNight) room.pricePerNight = pricePerNight;
    if (maxGuests) room.maxGuests = maxGuests;
    if (amenities) room.amenities = JSON.parse(amenities);
    if (description) room.description = description;
    if (images) room.images = images;
    await room.save();
    res.json({ success: true, room, message: "Room updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAvailableRoomsByHomestay = async (req, res) => {
  const { checkIn, checkOut } = req.query;
  const { homestayId } = req.params;
  const bookedRooms = await Booking.find({
    status: "confirmed",
    $or: [
      {
        checkIn: { $lt: new Date(checkOut) },
        checkOut: { $gt: new Date(checkIn) },
      },
    ],
  }).select("room");
  const bookedRoomIds = bookedRooms.map((b) => b.room);
  const rooms = await Room.find({
    homestay: homestayId,
    _id: { $nin: bookedRoomIds },
  });
  res.json({ success: true, rooms });
};

export const getRoomByHomestay = async (req, res) => {
  try {
    const rooms = await Room.find({ homestay: req.params.homestayId });
    res.json({ success: true, rooms });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRoomDetailsById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate("homestay");
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json({ success: true, room });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json({ success: true, message: "Room deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json({ success: true, rooms });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOwnerRooms = async (req, res) => {
  try {
    const ownerId = req.user._id;
    const rooms = await Room.find().populate({
      path: "homestay",
      match: { owner: ownerId },
    });
    res.json({ success: true, rooms });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleRoomStatus = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    room.status = room.status === "active" ? "inactive" : "active";
    await room.save();
    res.json({
      success: true,
      room,
      message: "Room status updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
