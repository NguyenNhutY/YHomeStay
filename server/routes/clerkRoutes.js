import express from "express";
import clerkWebhookController from "../controllers/clerkWebhookController.js";

const router = express.Router();

router.post(
  "/",
  express.raw({ type: "application/json" }),
  clerkWebhookController
);

export default router;
