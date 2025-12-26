import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    homestay: { type: mongoose.Schema.Types.ObjectId, ref: "Homestay" },

    name: String,
    pricePerNight: Number,
    maxGuests: Number,
    bedrooms: Number,
    bathrooms: Number,
    description: String,
    images: [String],
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
