import { useState } from "react";
import { signup } from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); // ✅ important

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(form);

      alert("Signup success");

      navigate("/login"); // ✅ redirect to login
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Signup</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
