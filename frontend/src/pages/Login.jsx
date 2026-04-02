import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // ✅ important

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(form);

    console.log("LOGIN RESPONSE:", res);

    if (res.token) {
      localStorage.setItem("token", res.token);
      navigate("/");
    } else {
      alert(res.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
