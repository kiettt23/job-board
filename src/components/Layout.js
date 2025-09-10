import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, Box } from "@mui/material";

export default function Layout() {
  return (
    <Box>
      <Navbar />
      <Container sx={{ mt: 4, mb: 6 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
