import express from "express";
import {
  createPost,
  getPosts,
  likePost,
  commentPost,
} from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createPost).get(getPosts);

router.put("/like/:id", protect, likePost);
router.post("/comment/:id", protect, commentPost);

export default router;
