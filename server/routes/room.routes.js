import express from "express";
import { getAvailableRooms } from "../controllers/room.controller.js";

const router = express.Router();

router.get("/available", getAvailableRooms);

export default router;
