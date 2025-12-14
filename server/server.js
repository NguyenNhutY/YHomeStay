import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import { clerkMiddleware } from "@clerk/express";
import conversationRoutes from "./routes/conversationRoutes.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();

app.use(cors());

// ❗ webhook cần raw body
app.post(
  "/api/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhooks
);

// các route khác mới dùng json
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/conversations", conversationRoutes);

app.get("/", (req, res) => {
  res.send("API successfully connected");
});

const startServer = async () => {
  await connectDB();

  const port = process.env.PORT || 4000;
  app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );
};

startServer();
