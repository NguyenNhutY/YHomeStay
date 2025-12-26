// models/Homestay.js
import mongoose from "mongoose";

const homestaySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    area: String,
    staff: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    images: [String],
    amenities: [String],
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Homestay", homestaySchema);
