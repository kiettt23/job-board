import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, Box } from "@mui/material";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Layout() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <Box>
      {/* Navbar gọi open login qua props */}
      <Navbar onOpenLogin={() => setLoginOpen(true)} />

      <Container sx={{ mt: 4, mb: 6 }}>
        {/* Pass setLoginOpen xuống page con (Jobs → JobCard) */}
        <Outlet context={{ setLoginOpen }} />
      </Container>

      {/* Login modal global */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </Box>
  );
}
