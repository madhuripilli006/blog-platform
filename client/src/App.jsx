import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/register" style={{ marginRight: "10px" }}>Register</Link>
      <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
      <Link to="/create" style={{ marginRight: "10px" }}>Create Post</Link>
      {user && (
        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      )}
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;