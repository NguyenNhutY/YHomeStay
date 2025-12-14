// controllers/conversationController.js
import Conversation from "../models/Conversation.js";

export const getAllConversations = async (req, res) => {
  try {
    const convos = await Conversation.find();
    res.json(convos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getConversation = async (req, res) => {
  try {
    const convo = await Conversation.findById(req.params.id);
    res.json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addMessage = async (req, res) => {
  try {
    const { text, from } = req.body;
    const convo = await Conversation.findById(req.params.id);
    convo.messages.push({ from, text });
    convo.lastMessage = text;
    convo.unread = from === "guest";
    await convo.save();
    res.json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createConversation = async (req, res) => {
  try {
    const { guest, property, initialMessage } = req.body;
    const convo = await Conversation.create({
      guest,
      property,
      messages: [{ from: "guest", text: initialMessage }],
      lastMessage: initialMessage,
      unread: true,
    });
    res.json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
