// models/Conversation.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  from: { type: String, enum: ["guest", "owner"], required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const conversationSchema = new mongoose.Schema({
  guest: { type: String, required: true },
  property: { type: String, required: true },
  messages: [messageSchema],
  unread: { type: Boolean, default: true },
  lastMessage: { type: String },
});

export default mongoose.model("Conversation", conversationSchema);
