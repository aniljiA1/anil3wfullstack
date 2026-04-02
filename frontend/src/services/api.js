const BASE_URL = import.meta.env.VITE_API_URL;

// ✅ helper
const getToken = () => localStorage.getItem("token");

// 🔐 AUTH APIs

export const signup = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    // ✅ FIXED
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const login = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// 📝 POSTS APIs

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return res.json();
};

export const createPost = async (data) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const likePost = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/like/${id}`, {
    // ✅ FIX
    method: "PUT", // ✅ FIX
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return res.json();
};
