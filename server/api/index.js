import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "../lib/mongodb.js";
import { clerkMiddleware } from "@clerk/express";

import clerkRoutes from "../routes/clerk.routes.js";
import conversationRoutes from "../routes/conversation.routes.js";
import userRouter from "../routes/user.routes.js";
import roomRoutes from "../routes/room.routes.js";
import bookingRoutes from "../routes/booking.routes.js";
import homestayRoutes from "../routes/homestay.routes.js";

const app = express();

// Middleware global
app.use(cors());

// ⚠️ Webhook Clerk phải mount TRƯỚC express.json()
app.use("/api/clerk", clerkRoutes);

app.use(express.json());
app.use(clerkMiddleware());

// Auto connect DB khi có request
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Routes
app.use("/api/conversations", conversationRoutes);
app.use("/api/user", userRouter);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/homestay", homestayRoutes);

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

export default app;
