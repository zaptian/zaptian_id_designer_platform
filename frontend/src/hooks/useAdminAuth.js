import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export function useAdminAuth() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin_user");
    const token = localStorage.getItem("admin_token");
    if (storedAdmin && token) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      const response = await api.post("/auth/login", {
        identifier: email,
        password,
      });

      const { user } = response.data;
      if (!["ADMIN", "SUPER_ADMIN", "SUPPORT"].includes(user.role)) {
        throw new Error("You do not have administrative privileges.");
      }

      localStorage.setItem("admin_token", response.data.token);
      localStorage.setItem("admin_user", JSON.stringify(user));
      setAdmin(user);
      navigate("/admin");
      return true;
    } catch (error) {
      throw new Error(error.message || "Invalid credentials");
    }
  }, [navigate]);

  const logout = useCallback(() => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    setAdmin(null);
    navigate("/admin/login");
  }, [navigate]);

  return { admin, login, logout, loading };
}
