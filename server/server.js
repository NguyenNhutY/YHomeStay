import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import { clerkMiddleware } from "@clerk/express";
import conversationRoutes from "./routes/conversationRoutes.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();

// QUAN TRỌNG: raw body cho webhook TRƯỚC express.json()
app.use("/api/clerk", express.raw({ type: "application/json" }), clerkWebhooks);

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/conversations", conversationRoutes);

app.get("/", (req, res) => {
  res.send("API successfully connected");
});

// Connect DB khi server khởi động
connectDB();

// Vercel cần export app, không dùng app.listen()
export default app;
