import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useAuth } from "../app/AuthContext";

export default function Navbar({ onOpenLogin }) {
  const { user, logout } = useAuth();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Job Board
        </Typography>

        {user ? (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography>{user.username}</Typography>
            <Button
              color="inherit"
              onClick={() => {
                console.log("👋 Logout button clicked");
                logout();
              }}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Button
            color="inherit"
            onClick={() => {
              console.log("🔓 Open login modal");
              onOpenLogin(); // ✅ gọi từ Layout
            }}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
