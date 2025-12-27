import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    homestay: { type: mongoose.Schema.Types.ObjectId, ref: "Homestay" },
    roomType: { type: String, enum: ["single", "double", "suite"] },

    name: String,
    pricePerNight: Number,
    maxGuests: Number,
  amenities: [type:Aray, required:true],
    description: String,
    images: [String],
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
