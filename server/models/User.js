import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    country: { type: String },
    phone: { type: String },
    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: { type: Date },
    role: {
      type: String,
      enum: ["guest", "admin", "owner", "staff"],
      default: "guest",
    },

    recentSearchedCities: [{ type: String }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
