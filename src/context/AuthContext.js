import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the Auth Context
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in (on page refresh)
  useEffect(() => {
    const storedUser = localStorage.getItem("cmsUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", 
        { email, password }, 
        { withCredentials: true } // Important for cookies
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

  // Logout function (now accepts navigate as a parameter)
  const logout = async (navigate) => {
    try {
      await axios.get("http://localhost:5000/api/auth/logout", { withCredentials: true });
      setUser(null);
      localStorage.removeItem("cmsUser");
      navigate("/login"); // Redirect to login page after logout
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
