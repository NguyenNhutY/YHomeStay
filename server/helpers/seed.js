import mongoose from "mongoose";
import "dotenv/config";
import Conversation from "../models/Conversation.js";
import connectDB from "../config/mongodb.js";

const conversationsData = [
  {
    guest: "Anna Nguyen",
    property: "OceanView Villa",
    lastMessage: "Can I check in early tomorrow?",
    unread: true,
    messages: [
      { from: "guest", text: "Hi 👋" },
      { from: "guest", text: "Can I check in early tomorrow?" },
    ],
  },
  {
    guest: "David Tran",
    property: "Forest Cabin",
    lastMessage: "Thanks! Everything was great.",
    unread: false,
    messages: [
      { from: "guest", text: "Thanks! Everything was great." },
      { from: "owner", text: "Glad you enjoyed your stay 😊" },
    ],
  },
  {
    guest: "Linh Pham",
    property: "City Center Apartment",
    lastMessage: "Is parking included?",
    unread: true,
    messages: [{ from: "guest", text: "Hi, is parking included?" }],
  },
  {
    guest: "Minh Le",
    property: "Mountain Retreat",
    lastMessage: "See you next week!",
    unread: false,
    messages: [
      { from: "guest", text: "See you next week!" },
      { from: "owner", text: "Looking forward to hosting you!" },
    ],
  },
];

const seedDB = async () => {
  await connectDB();
  await Conversation.deleteMany(); // xóa dữ liệu cũ
  await Conversation.insertMany(conversationsData);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
