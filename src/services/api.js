import axios from "axios";

// Create the axios instance and export it
const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // ✅ use 127.0.0.1 instead of localhost
});

// Attach token for auth-protected routes
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;
