import app from "../app.js";
import connectDB from "../config/mongodb.js";

let isConnected = false;

export default async function handler(req, res) {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
    }
    return app(req, res);
  } catch (err) {
    console.error("Function crashed:", err);
    res.status(500).json({ error: err.message });
  }
}
