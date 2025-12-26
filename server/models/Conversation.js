import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const conversationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    homestay: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Homestay",
      required: true,
    },
    messages: [messageSchema],
    lastMessage: String,
    unreadByGuest: { type: Boolean, default: false },
    unreadByOwner: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", conversationSchema);
