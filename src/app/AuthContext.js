import { createContext, useContext, useState } from "react";

// 1. Tạo context trống
const AuthContext = createContext();

// 2. Provider bọc toàn app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = chưa login

  // Fake login: hardcode username & password
  const login = (username, password) => {
    console.log("🔑 Trying login with:", username, password);
    if (username === "admin" && password === "demo123") {
      const userData = { username };
      console.log("✅ Login success:", userData);
      setUser(userData); // Lưu user vào state
      return true;
    }
    console.warn("❌ Login failed");
    return false;
  };

  const logout = () => {
    console.log("🚪 Logout:", user);
    setUser(null); // clear user
  };

  // 3. Cung cấp value cho toàn app
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 4. Custom hook cho tiện
export function useAuth() {
  return useContext(AuthContext);
}
