import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import User from "./models/User.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running on Vercel OK");
});

app.use("/api/conversations", conversationRoutes);

// debug xem DB có connect không
app.get("/api/debug/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");

    const port = process.env.PORT || 4000;
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    );
  } catch (err) {
    console.error("Server failed:", err.message);
  }
};

startServer();
