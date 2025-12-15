// routes/clerkRoutes.js
import express from "express";
import { handleClerkWebhook } from "../controllers/clerkWebhooks.js";

const router = express.Router();

// ⚠️ chỉ đọc raw body, không parse
router.post("/", handleClerkWebhook);

export default router;
