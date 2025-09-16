// -------------------- Imports --------------------
import React, { createContext, useContext, useState } from "react";

// -------------------- Context Setup --------------------
const AuthContext = createContext();

// -------------------- Provider --------------------
export function AuthProvider({ children }) {
  // -------------------- State --------------------
  const [user, setUser] = useState(null);

  // -------------------- Handlers --------------------
  // Fake login: only accepts admin/demo123
  const login = (username, password) => {
    const ok = username === "admin" && password === "demo123";
    if (ok) setUser({ username });
    return ok;
  };

  const logout = () => setUser(null);

  // -------------------- Render --------------------
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// -------------------- Hook --------------------
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
