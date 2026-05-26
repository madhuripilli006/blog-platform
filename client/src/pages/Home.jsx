import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Post
  const deletePost = async (id) => {
    try {
      await API.delete(`/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  // Start Edit
  const startEdit = (post) => {
    setEditingPost(post._id);
    setUpdatedTitle(post.title);
    setUpdatedContent(post.content);
  };

  // Update Post
  const updatePost = async (id) => {
    try {
      await API.put(`/posts/${id}`, {
        title: updatedTitle,
        content: updatedContent,
      });

      setEditingPost(null);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Posts</h1>

      {posts.map((post) => (
        <div key={post._id} className="post-card"
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          {editingPost === post._id ? (
            <>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                }}
              />

              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                }}
              />

              <button onClick={() => updatePost(post._id)}>
                Save
              </button>
            </>
          ) : (
            <>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <small>Author: {post.author?.name}</small>

              <br />
              <br />

              <button
                onClick={() => startEdit(post)}
                style={{ marginRight: "10px" }}
              >
                Edit
              </button>

              <button onClick={() => deletePost(post._id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;