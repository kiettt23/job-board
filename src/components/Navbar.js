// -------------------- Imports --------------------
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  Container,
} from "@mui/material";
import { useAuth } from "../app/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// -------------------- Navbar Component --------------------
export default function Navbar({ searchTerm, setSearchTerm }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // -------------------- Render --------------------
  return (
    <AppBar position="sticky" elevation={0}>
      {/* Container keeps left/right edges aligned with main content */}
      <Container maxWidth="lg">
        <Toolbar sx={{ minHeight: 64, gap: 2 }}>
          {/* Left: Logo */}
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Job Board
          </Typography>

          {/* Center: Search bar */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <TextField
              size="small"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                width: "100%",
                maxWidth: 420,
                bgcolor: "white",
                borderRadius: 1,
                input: { color: "black" },
              }}
            />
          </Box>

          {/* Right: Auth section */}
          {user ? (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography>{user.username}</Typography>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </Box>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Sign In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
