import { useState } from "react";
import API from "../services/api";

function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const res = await API.post("/posts", {
        title: form.title,
        content: form.content,
        author: user.id,
      });

      alert("Post created successfully");
      setForm({ title: "", content: "" });
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "10px" }}>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px" }}
        />

        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px", height: "120px" }}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;