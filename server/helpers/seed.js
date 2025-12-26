import mongoose from "mongoose";
import "dotenv/config";
import Homestay from "../models/Homestay.js";
import connectDB from "../config/mongodb.js";
import cloudinary from "../config/cloudinary.js";
import path from "path";
import fs from "fs";

// Thay bằng path server, copy các file ảnh vào server folder, ví dụ: server/assets/
const localAssetsFolder = path.resolve("server/assets");

const Data =  [

  {
    title: "Oceanview Oasis Serenity Escape",
    description:
      "Discover a harmonious blend of modern luxury and timeless elegance. Nestled in the heart of this area, our newest residency offers a sanctuary where every detail is meticulously crafted to elevate your lifestyle.",
    area: "800",
    pricePerNight: 299,
    maxGuests: 3,
    images: ["img1.png", "pImg2.png", "pImg3.png", "pImg4.png"], // tên file trong server/assets

    amenities: ["Balcony", "High-Speed Internet", "Backyard"],
    host: "66f000000000000000000001", // id giả của User
    status: "active",
  },
  {
    title: "Mountain Majesty Tranquility Haven",
    description:
      "This villa is a stunning masterpiece of luxury and art. Adorned with two helipads for convenient aerial access, the expansive interiors provide ample space for relaxation and entertainment.",
    area: "500",
    pricePerNight: 599,
    maxGuests: 2,
    images: [
      "https://picsum.photos/400/300?5",
      "https://picsum.photos/400/300?6",
      "https://picsum.photos/400/300?7",
      "https://picsum.photos/400/300?8",
    ],
    amenities: ["Backyard", "Garage", "Fireplace"],
    host: "66f000000000000000000001",
    status: "active",
  },
  {
    title: "Urban Elegance Sophistication Haven",
    description:
      "This villa is a stunning masterpiece of luxury and art. Adorned with two helipads for convenient aerial access, the expansive interiors provide ample space for relaxation and entertainment.",
    area: "200",
    pricePerNight: 299,
    maxGuests: 2,
    images: [
      "https://picsum.photos/400/300?9",
      "https://picsum.photos/400/300?10",
      "https://picsum.photos/400/300?11",
      "https://picsum.photos/400/300?12",
    ],
    amenities: ["Fitness Center", "Terrace", "Parking"],
    host: "66f000000000000000000001",
    status: "active",
  },
  {
    title: "Garden Grove Oasis Retreat Haven",
    description:
      "This villa is a stunning masterpiece of luxury and art. Adorned with two helipads for convenient aerial access, the expansive interiors provide ample space for relaxation and entertainment.",
    area: "500",
    pricePerNight: 399,
    maxGuests: 3,
    images: [
      "https://picsum.photos/400/300?13",
      "https://picsum.photos/400/300?14",
      "https://picsum.photos/400/300?15",
      "https://picsum.photos/400/300?16",
    ],
    amenities: ["Terrace", "Backyard", "Fitness Center"],
    host: "66f000000000000000000001",
    status: "active",
  },
  {
    title: "Seaside Bliss Modern Retreat",
    description:
      "Experience seaside living with contemporary design and ocean views from every room. Perfect for vacation rentals or permanent residence.",
    area: "250",
    pricePerNight: 499,
    maxGuests: 4,
    images: [
      "https://picsum.photos/400/300?17",
      "https://picsum.photos/400/300?18",
      "https://picsum.photos/400/300?19",
      "https://picsum.photos/400/300?20",
    ],
    amenities: ["Swimming Pool", "Balcony", "Private Beach"],
    host: "66f000000000000000000001",
    status: "active",
  },
  {
    title: "Countryside Charm Rustic Escape",
    description:
      "Enjoy a peaceful countryside retreat with spacious gardens, natural wood interiors, and cozy fireplaces.",
    area: "700",
    pricePerNight: 199,
    maxGuests: 2,
    images: [
      "https://picsum.photos/400/300?21",
      "https://picsum.photos/400/300?22",
      "https://picsum.photos/400/300?23",
      "https://picsum.photos/400/300?24",
    ],
    amenities: ["Garden", "Fireplace", "Parking"],
    host: "66f000000000000000000001",
    status: "active",
  },
]
  }
]
const seed = async () => {
  try {
    await connectDB();
\
    for (const prop of dummyProperties) {
      const uploadedUrls = [];
      for (const imgName of prop.images) {
        const filePath = path.join(localAssetsFolder, imgName);
        if (fs.existsSync(filePath)) {
          const result = await cloudinary.uploader.upload(filePath, { folder: "homestays" });
          uploadedUrls.push(result.secure_url);
        } else {
          console.log("File not found:", filePath);
        }
      }
      await Homestay.create({
        ...prop,
        images: uploadedUrls,
      });
    }

    console.log("Homestays seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seed();