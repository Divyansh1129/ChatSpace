import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5002/api"
    : "https://chatspace-sl3i.onrender.com/api",
  withCredentials: true,
});