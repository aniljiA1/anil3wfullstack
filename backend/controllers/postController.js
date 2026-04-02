import Post from "../models/Post.js";

// Create Post
export const createPost = async (req, res) => {
  const { text, image } = req.body;

  const post = await Post.create({
    user: req.user._id,
    text,
    image,
  });

  res.status(201).json(post);
};

// Get All Posts
export const getPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("user", "name")
    .populate("comments.user", "name")
    .sort({ createdAt: -1 });

  res.json(posts);
};

// Like Post
export const likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post.likes.includes(req.user._id)) {
    post.likes.push(req.user._id);
  } else {
    post.likes = post.likes.filter(
      (id) => id.toString() !== req.user._id.toString(),
    );
  }

  await post.save();
  res.json(post);
};

// Comment
export const commentPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  const comment = {
    user: req.user._id,
    text: req.body.text,
  };

  post.comments.push(comment);
  await post.save();

  res.json(post);
};
