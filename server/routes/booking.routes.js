import express from "express";
import { createBooking } from "../controllers/booking.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authUser, createBooking);

export default router;
