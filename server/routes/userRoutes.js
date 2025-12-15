import express from "express";
import { authUser } from "../middleware/authMiddleware.js";
import {
  getUserProfile,
  addRecentSearchCity,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", authUser, getUserProfile);
router.post("/store-recent-search", authUser, addRecentSearchCity);

export default router;
