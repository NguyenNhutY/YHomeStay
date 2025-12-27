import express from "express";
import {
  getAvailableRooms,
  updateRoom,
  createRoom,
  getRoomById,
  getRoomsByHomestay,
} from "../controllers/room.controller.js";

const router = express.Router();

router.get("/available", getAvailableRooms);
router.get("/homestay/:homestayId", getRoomsByHomestay);
router.get("/:id", getRoomById);
router.post("/", createRoom);
router.put("/:id", updateRoom);

export default router;
