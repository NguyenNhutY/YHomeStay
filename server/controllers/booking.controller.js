import Booking from "../models/Booking.js";
import Room from "../models/Room.js";

export const createBooking = async (req, res) => {
  const { roomId, checkIn, checkOut } = req.body;

  const room = await Room.findById(roomId);
  if (!room) return res.status(404).json({ message: "Room not found" });

  const nights =
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);

  const booking = await Booking.create({
    user: req.user._id,
    room: roomId,
    checkIn,
    checkOut,
    totalPrice: nights * room.pricePerNight,
    status: "confirmed",
  });

  res.status(201).json({ success: true, booking });
};
