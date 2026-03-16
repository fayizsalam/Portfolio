import express from "express";
import { sendMessage, index } from "../controllers/contactController.js";

const router = express.Router();

router.get("/", index);
router.post("/contact", sendMessage);

export default router;