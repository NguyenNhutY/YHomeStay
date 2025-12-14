import { Webhook } from "svix";
import User from "../models/User.js";

const clerkWebhooks = async (req, res) => {
  try {
    const payload = req.body; // raw buffer
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const evt = wh.verify(payload, headers);
    const { data, type } = evt;

    switch (type) {
      case "user.created": {
        await User.create({
          _id: data.id,
          email: data.email_addresses[0].email_address,
          username: `${data.first_name || ""} ${data.last_name || ""}`,
          image: data.image_url,
        });
        break;
      }

      case "user.updated": {
        await User.findByIdAndUpdate(data.id, {
          email: data.email_addresses[0].email_address,
          username: `${data.first_name || ""} ${data.last_name || ""}`,
          image: data.image_url,
        });
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }

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
