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
