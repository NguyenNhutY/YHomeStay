import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
    homestay: { type: mongoose.Schema.Types.ObjectId, ref: "Homestay" },

    checkIn: Date,
    checkOut: Date,
    totalPrice: Number,
    nights: Number, // số đêm
    pricePerNight: Number,
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
