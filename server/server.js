import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import { clerkMiddleware } from "@clerk/express";
import conversationRoutes from "./routes/conversationRoutes.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

await connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/clerk", clerkWebhooks);
app.use("/api/conversations", conversationRoutes);

app.get("/", (req, res) => {
  res.send("API successfully connected");
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
