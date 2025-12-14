// server.js
import app from "./app.js";
import connectDB from "./config/mongodb.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 4000;

await connectDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log("Mongo URI:", process.env.MONGO_URI);
});
