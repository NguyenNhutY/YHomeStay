// models/Homestay.js
import mongoose from "mongoose";

const homestaySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    address: String,
    city: String,
    country: String,
    pricePerNight: Number,
    images: [String],
    amenities: [String],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Homestay", homestaySchema);
