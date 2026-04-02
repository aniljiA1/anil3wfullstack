import { useEffect, useState } from "react";
import { getPosts, createPost, likePost } from "../services/api";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";
import { useNavigate } from "react-router-dom";

function Feed() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch posts
  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      console.log("Posts:", data); // 👈 debug
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ✅ Create post
  const handleCreate = async (post) => {
    try {
      const res = await createPost(post);
      console.log("Created:", res); // 👈 debug

      await fetchPosts(); // ✅ wait for refresh
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Failed to create post");
    }
  };

  // ✅ Like post
  const handleLike = async (id) => {
    try {
      await likePost(id);
      await fetchPosts();
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      {/* ✅ Logout Button */}
      <button onClick={handleLogout} style={{ float: "right" }}>
        Logout
      </button>

      <h2>Feed</h2>

      <CreatePost onCreate={handleCreate} />

      {/* ✅ Empty state */}
      {posts.length === 0 ? (
        <p>No posts yet</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post._id} post={post} onLike={handleLike} />
        ))
      )}
    </div>
  );
}

export default Feed;
