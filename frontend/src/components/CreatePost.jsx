import { useState } from "react";

function CreatePost({ onCreate }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation (allow text OR image)
    if (!text.trim() && !image.trim()) {
      alert("Post must have text or image");
      return;
    }

    // ✅ Send data to parent
    onCreate({
      text,
      image,
    });

    // ✅ Reset fields
    setText("");
    setImage("");
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        {/* ✅ Text Input */}
        <textarea
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* ✅ Image URL Input */}
        <input
          type="text"
          placeholder="Enter image URL "
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {/* ✅ Image Preview */}
        {image && (
          <img
            src={image}
            alt="preview"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          />
        )}

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
