import axios from "axios";

// Create the axios instance
const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api", 
});

// Attach token automatically for all protected routes
API.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // 🛠️ Catch interceptor errors
  }
);

export default API;
