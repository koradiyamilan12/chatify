import { Router } from "express";
import {
  getAllChatPartners,
  getAllContacts,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const router = Router();

// the middlewares execute in order - so requests get rate-limited first, then authnticated.
// this is actually more efficient since unauthenticated requests get blocked by rate limiting
router.use(arcjetProtection, protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getAllChatPartners);
router.get("/:id", getMessagesByUserId);

router.post("/send/:id", sendMessage);

export default router;
