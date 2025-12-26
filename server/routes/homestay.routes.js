// routes/homestay.route.js
import express from "express";
import {
  createHomestay,
  getHomestays,
  getMyHomestays,
  toggleHomestayStatus,
  updateHomestay,
} from "../controllers/homestay.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });
router.get("/my-homestays", authUser, getMyHomestays);
router.put("/:id", authUser, updateHomestay);
router.patch("/:id/status", authUser, toggleHomestayStatus);
router.post("/", authUser, upload.array("images", 4), createHomestay);
router.get("/homestays", authUser, getHomestays);

export default router;
