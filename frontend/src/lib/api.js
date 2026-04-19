import axios from "axios";
import * as mockData from "./mockData";

/**
 * api.js
 * Centralized Axios instance with JWT and Mock handling.
 */

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Request Interceptor: Attach JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || localStorage.getItem("admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor: Error Normalization & Mock Failover
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("admin_token");
    }
    const message = error.response?.data?.message ?? error.message;
    return Promise.reject(new Error(message));
  },
);
