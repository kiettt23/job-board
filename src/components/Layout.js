import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, Box } from "@mui/material";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Layout() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ search state

  return (
    <Box>
      {/* Navbar có search bar */}
      <Navbar
        onOpenLogin={() => setLoginOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Truyền searchTerm xuống các page qua Outlet context */}
      <Container sx={{ mt: 4, mb: 6 }}>
        <Outlet context={{ setLoginOpen, searchTerm }} />
      </Container>

      {/* Login modal global */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </Box>
  );
}
