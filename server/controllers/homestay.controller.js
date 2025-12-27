import Homestay from "../models/Homestay.js";

// controllers/homestay.controller.js
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const createHomestay = async (req, res) => {
  try {
    const { title, description, area, pricePerNight, maxGuests, amenities } =
      req.body;
    const host = req.user._id ? req.user.role == "owner" : null;

    if (!req.files || req.files.length !== 4) {
      return res
        .status(400)
        .json({ message: "Please upload exactly 4 images" });
    }

    const uploadedUrls = [];

    // upload từng ảnh lên Cloudinary
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "homestays",
      });
      uploadedUrls.push(result.secure_url);
      fs.unlinkSync(file.path); // xóa file tạm
    }

    const homestay = await Homestay.create({
      title,
      description,
      area,
      pricePerNight,
      maxGuests,
      amenities: amenities || [],
      host,
      images: uploadedUrls,
      status: "pending",
    });

    res.status(201).json(homestay);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getMyHomestays = async (req, res) => {
  try {
    const data = await Homestay.find({ host: req.user._id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Owner xem homestay của mình
 */
export const getHomestays = async (req, res) => {
  try {
    const data = await Homestay.find({ status: "active" }).populate(
      "host",
      "name email"
    );
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Owner cập nhật homestay
 */
export const updateHomestay = async (req, res) => {
  try {
    const homestay = await Homestay.findOne({
      _id: req.params.id,
      host: req.user._id,
    });

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    const { title, description, area, price, facilities, images, amenities } =
      req.body;

    if (title) homestay.title = title;
    if (description) homestay.description = description;
    if (area) homestay.area = area;
    if (price?.rent) homestay.pricePerNight = price.rent;
    if (facilities?.bedrooms) homestay.maxGuests = facilities.bedrooms;
    if (images) homestay.images = images;
    if (amenities) homestay.amenities = amenities;

    await homestay.save();
    res.json(homestay);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Bật / tắt homestay
 */
export const toggleHomestayStatus = async (req, res) => {
  try {
    const homestay = await Homestay.findOne({
      _id: req.params.id,
      host: req.user._id,
    });

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    homestay.status = homestay.status === "active" ? "inactive" : "active";

    await homestay.save();
    res.json(homestay);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getHomestayById = async (req, res) => {
  try {
    const homestay = await Homestay.findById(req.params.id).populate(
      "host",
      "name email"
    );
    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }
    res.json(homestay);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const registerHomestay = async (req, res) => {
  try {
    // Logic to register a hotel
    const { title, description, area, pricePerNight, maxGuests, amenities } =
      req.body;
    const host = req.user._id ? req.user.role == "guest" : null;
    const hotel = await Hotel.findOne({ host });
    if (hotel) {
      return res
        .status(400)
        .json({ message: "You have already created a homestay" });
    }
    const newHotel = await Hotel.create({
      title,
      description,
      area,
      pricePerNight,
      maxGuests,
      amenities: amenities || [],
      host,
      status: "pending",
    });
    await User.findByIdAndUpdate(host);

    res.status(201).json(newHotel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const getHomestaylById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate(
      "host",
      "name email"
    );
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.json(hotel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getHomestayRooms = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate("rooms");
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.json(hotel.rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getHomestayRoomDetails = async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId).populate("hotel");
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
