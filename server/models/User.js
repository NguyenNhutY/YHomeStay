import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    _id: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String },
    role: {
      type: String,
      required: true,
      enum: ["user", "agencyOwner"],
      default: "user",
    },
    recentSearchedCities: [{ type: String }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
