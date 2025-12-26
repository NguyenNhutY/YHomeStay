import express from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import {
  getUserProfile,
  addRecentSearchCity,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", authUser, getUserProfile);
router.post("/store-recent-search", authUser, addRecentSearchCity);

export default router;
