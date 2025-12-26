// config/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

// cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // tên cloud
  api_key: process.env.CLOUDINARY_API_KEY, // api key
  api_secret: process.env.CLOUDINARY_API_SECRET, // api secret
  secure: true,
});

export default cloudinary;
