// routes/conversationRoutes.js
import express from "express";
import {
  getAllConversations,
  getConversation,
  addMessage,
  createConversation,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.get("/", getAllConversations);
router.get("/:id", getConversation);
router.post("/:id/message", addMessage);
router.post("/", createConversation);

export default router;
