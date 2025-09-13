import { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { useAuth } from "../app/AuthContext";

export default function LoginModal({ open, onClose }) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    console.log("📤 Submitting login:", { username, password });
    const ok = login(username, password);
    if (ok) {
      console.log("🎉 Login modal closing (success)");
      onClose();
    } else {
      console.log("⚠️ Wrong credentials");
      setError("Sai username hoặc password");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          p: 3,
          bgcolor: "background.paper",
          width: 300,
          mx: "auto",
          mt: "20vh",
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Đăng nhập
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
