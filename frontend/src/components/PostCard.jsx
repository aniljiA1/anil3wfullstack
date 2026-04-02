function PostCard({ post, onLike }) {
  return (
    <div className="card">
      <h4>{post.user?.name || "User"}</h4>

      {/* ✅ Text */}
      {post.text && <p>{post.text}</p>}

      {/* ✅ Image */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          style={{ width: "100%", marginTop: "10px" }}
        />
      )}

      <button onClick={() => onLike(post._id)}>
        ❤️ {post.likes?.length || 0}
      </button>
    </div>
  );
}

export default PostCard;
