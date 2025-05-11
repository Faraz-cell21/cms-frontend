import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("cmsUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", 
        { email, password }, 
        { withCredentials: true }
      );

      if (res.status === 200) {
        setUser(res.data.user);
        localStorage.setItem("cmsUser", JSON.stringify(res.data.user));
        return { success: true, role: res.data.user.role };
      }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Login failed" };
    }
  };

  const logout = async (navigate) => {
    try {
      await axios.get("http://localhost:5000/api/auth/logout", { withCredentials: true });
      setUser(null);
      localStorage.removeItem("cmsUser");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
