import Conversation from "../models/Conversation.js";

/**
 * Lấy tất cả conversation của user hiện tại
 */
export const getAllConversations = async (req, res) => {
  try {
    const convos = await Conversation.find({
      user: req.user._id,
    })
      .populate("homestay")
      .populate("messages.from");

    res.json(convos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Lấy chi tiết 1 conversation
 */
export const getConversation = async (req, res) => {
  try {
    const convo = await Conversation.findById(req.params.id)
      .populate("homestay")
      .populate("messages.from");

    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    res.json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Thêm tin nhắn
 */
export const addMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const convo = await Conversation.findById(req.params.id);

    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    convo.messages.push({
      from: req.user._id,
      text,
    });

    convo.lastMessage = text;

    // nếu người gửi là guest
    if (req.user.role === "guest") {
      convo.unreadByOwner = true;
      convo.unreadByGuest = false;
    } else {
      convo.unreadByGuest = true;
      convo.unreadByOwner = false;
    }

    await convo.save();
    res.json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Tạo conversation mới
 */
export const createConversation = async (req, res) => {
  try {
    const { homestay, initialMessage } = req.body;

    const convo = await Conversation.create({
      user: req.user._id,
      homestay,
      messages: [
        {
          from: req.user._id,
          text: initialMessage,
        },
      ],
      lastMessage: initialMessage,
      unreadByOwner: true,
      unreadByGuest: false,
    });

    res.status(201).json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
