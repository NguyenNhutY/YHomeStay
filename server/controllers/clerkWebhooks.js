import { Webhook } from "svix";
import User from "../models/User.js";

const clerkWebhooks = async (req, res) => {
  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // 👉 verify và LẤY event đã xác thực
    const evt = wh.verify(req.body, headers);
    const { data, type } = evt;

    const userData = {
      email: data.email_addresses?.[0]?.email_address,
      username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.create({
          _id: data.id,
          ...userData,
        });
        break;

      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;

      default:
        break;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Clerk webhook error:", err.message);
    res.status(400).json({ success: false });
  }
};

export default clerkWebhooks;
