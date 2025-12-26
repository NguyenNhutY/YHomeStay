import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import clerkRoutes from "./routes/clerk.routes.js";
import conversationRoutes from "./routes/conversation.routes.js";
import { clerkMiddleware } from "@clerk/express";
import userRouter from "./routes/user.routes.js";
import roomRoutes from "./routes/room.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import homestayRoutes from "./routes/homestay.routes.js";

const app = express();

// Connect DB
connectDB();

// Middleware

// Routes
// IMPORTANT: Webhook phải mount **trước express.json()** nếu muốn raw-body trực tiếp
app.use("/api/clerk", clerkRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/user", userRouter);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/homestay", homestayRoutes);

app.use(cors());
app.use(express.json()); // dùng cho routes khác, không ảnh hưởng webhook
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API successfully connected");
});

export default app;
