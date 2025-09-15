import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { useAuth } from "../app/AuthContext";

export default function Navbar({ onOpenLogin, searchTerm, setSearchTerm }) {
  const { user, logout } = useAuth();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Job Board
        </Typography>

        {/* ✅ Search box */}
        <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              input: { color: "black" },
            }}
          />
        </Box>

        {/* User / Auth buttons */}
        {user ? (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography>{user.username}</Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Button color="inherit" onClick={onOpenLogin}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
