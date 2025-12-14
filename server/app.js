import express from "express";
import cors from "cors";
import conversationRoutes from "./routes/conversationRoutes.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();

// Webhook Clerk PHẢI dùng raw body
app.post(
  "/api/webhooks/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhooks
);

// Middleware JSON bình thường
app.use(cors());
app.use(express.json());

app.use("/api/conversations", conversationRoutes);

app.get("/api", (req, res) => {
  res.json({ status: "API running" });
});

export default app;
