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

export const markAsRead = async (req, res) => {
  try {
    const convo = await Conversation.findById(req.params.id);
    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    if (req.user.role === "guest") {
      convo.unreadByGuest = false;
    } else {
      convo.unreadByOwner = false;
    }
    await convo.save();
    res.json(convo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteConversation = async (req, res) => {
  try {
    const convo = await Conversation.findByIdAndDelete(req.params.id);
    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.json({ message: "Conversation deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const clearMessages = async (req, res) => {
  try {
    const convo = await Conversation.findById(req.params.id);
    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    convo.messages = [];
    convo.lastMessage = "";
    await convo.save();
    res.json({ message: "Messages cleared successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUnreadConversationsCount = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { unreadByGuest: true, user: req.user._id };
    } else {
      filter = { unreadByOwner: true };
    }
    const count = await Conversation.countDocuments(filter);
    res.json({ unreadCount: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getConversationsByHomestay = async (req, res) => {
  try {
    const convos = await Conversation.find({
      homestay: req.params.homestayId,
    })
      .populate("homestay")
      .populate("messages.from");
    res.json(convos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteConversationsByHomestay = async (req, res) => {
  try {
    const result = await Conversation.deleteMany({
      homestay: req.params.homestayId,
    });
    res.json({
      message: `${result.deletedCount} conversations deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAllConversations = async (req, res) => {
  try {
    const result = await Conversation.deleteMany({ user: req.user._id });
    res.json({
      message: `${result.deletedCount} conversations deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const markAllAsRead = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { unreadByGuest: true, user: req.user._id };
    } else {
      filter = { unreadByOwner: true };
    }
    await Conversation.updateMany(filter, {
      $set: {
        unreadByGuest: false,
        unreadByOwner: false,
      },
    });
    res.json({ message: "All conversations marked as read" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTotalConversationsCount = async (req, res) => {
  try {
    const count = await Conversation.countDocuments({ user: req.user._id });
    res.json({ totalCount: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getConversationsSummary = async (req, res) => {
  try {
    const convos = await Conversation.find({ user: req.user._id })
      .populate("homestay")
      .populate("messages.from");
    const summary = convos.map((convo) => ({
      conversationId: convo._id,
      homestay: convo.homestay,
      lastMessage: convo.lastMessage,
      unreadByGuest: convo.unreadByGuest,
      unreadByOwner: convo.unreadByOwner,
      totalMessages: convo.messages.length,
    }));
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMessagesByConversation = async (req, res) => {
  try {
    const convo = await Conversation.findById(req.params.id).populate(
      "messages.from"
    );
    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.json(convo.messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getLastMessageByConversation = async (req, res) => {
  try {
    const convo = await Conversation.findById(req.params.id);
    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.json({ lastMessage: convo.lastMessage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getConversationsWithLastMessage = async (req, res) => {
  try {
    const convos = await Conversation.find({ user: req.user._id })
      .populate("homestay")
      .populate("messages.from");
    const result = convos.map((convo) => ({
      conversationId: convo._id,
      homestay: convo.homestay,
      lastMessage: convo.messages[convo.messages.length - 1] || null,
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getConversationsByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { user: req.user._id };
    } else {
      filter = {};
    }
    const convos = await Conversation.find(filter)
      .populate("homestay")
      .populate("messages.from");
    res.json(convos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteConversationsByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { user: req.user._id };
    } else {
      filter = {};
    }
    const result = await Conversation.deleteMany(filter);
    res.json({
      message: `${result.deletedCount} conversations deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const markAsReadByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { unreadByGuest: true, user: req.user._id };
    } else {
      filter = { unreadByOwner: true };
    }
    await Conversation.updateMany(filter, {
      $set: {
        unreadByGuest: false,
        unreadByOwner: false,
      },
    });
    res.json({ message: "Conversations marked as read" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTotalConversationsCountByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { user: req.user._id };
    }
    const count = await Conversation.countDocuments(filter);
    res.json({ totalCount: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUnreadConversationsCountByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { unreadByGuest: true, user: req.user._id };
    } else {
      filter = { unreadByOwner: true };
    }
    const count = await Conversation.countDocuments(filter);
    res.json({ unreadCount: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAllConversationsByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { user: req.user._id };
    }
    const result = await Conversation.deleteMany(filter);
    res.json({
      message: `${result.deletedCount} conversations deleted successfully`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const markAllAsReadByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { unreadByGuest: true, user: req.user._id };
    } else {
      filter = { unreadByOwner: true };
    }
    await Conversation.updateMany(filter, {
      $set: {
        unreadByGuest: false,
        unreadByOwner: false,
      },
    });
    res.json({ message: "All conversations marked as read" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMessagesByConversationWithPagination = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const convo = await Conversation.findById(req.params.id).populate(
      "messages.from"
    );
    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedMessages = convo.messages.slice(startIndex, endIndex);
    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      totalMessages: convo.messages.length,
      messages: paginatedMessages,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getLastMessagesForAllConversations = async (req, res) => {
  try {
    const convos = await Conversation.find({ user: req.user._id })
      .populate("homestay")
      .populate("messages.from");
    const result = convos.map((convo) => {
      const lastMessage = convo.messages[convo.messages.length - 1] || null;
      return {
        conversationId: convo._id,
        homestay: convo.homestay,
        lastMessage,
      };
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getConversationsSummaryByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { user: req.user._id };
    }
    const convos = await Conversation.find(filter)
      .populate("homestay")
      .populate("messages.from");
    const summary = convos.map((convo) => ({
      conversationId: convo._id,
      homestay: convo.homestay,
      lastMessage: convo.lastMessage,
      unreadByGuest: convo.unreadByGuest,
      unreadByOwner: convo.unreadByOwner,
      totalMessages: convo.messages.length,
    }));
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTotalMessagesCountByConversation = async (req, res) => {
  try {
    const convo = await Conversation.findById(req.params.id);
    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.json({ totalMessages: convo.messages.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getLastMessageByConversationWithDetails = async (req, res) => {
  try {
    const convo = await Conversation.findById(req.params.id).populate(
      "messages.from"
    );
    if (!convo) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    const lastMessage = convo.messages[convo.messages.length - 1] || null;
    res.json({ lastMessage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getConversationsWithLastMessageByUserRole = async (req, res) => {
  try {
    let filter = {};
    if (req.user.role === "guest") {
      filter = { user: req.user._id };
    } else {
      filter = {};
    }
    const convos = await Conversation.find(filter)
      .populate("homestay")
      .populate("messages.from");
    const result = convos.map((convo) => ({
      conversationId: convo._id,
      homestay: convo.homestay,
      lastMessage: convo.messages[convo.messages.length - 1] || null,
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
