import express from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import {
  getUserData,
  storeRecentSearchedCitites,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", authUser, getUserData);
router.post("/store-recent-search", authUser, storeRecentSearchedCitites);

export default router;
