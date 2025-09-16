// -------------------- Imports --------------------
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, Box } from "@mui/material";
import { useState } from "react";

// -------------------- Layout Component --------------------
export default function Layout() {
  // -------------------- State --------------------
  const [searchTerm, setSearchTerm] = useState("");

  // -------------------- Render --------------------
  return (
    <Box>
      {/* Global navbar with search + auth */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Page content, aligned with Navbar edges via Container */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Outlet context={{ searchTerm }} />
      </Container>
    </Box>
  );
}
