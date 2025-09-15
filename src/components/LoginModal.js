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
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginModal({ open = true }) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/"; // ✅ nơi cần redirect về

  const handleSubmit = () => {
    const ok = login(username, password);
    if (ok) {
      navigate(from, { replace: true }); // ✅ login thành công → quay lại
    } else {
      setError("Sai username hoặc password");
    }
  };

  return (
    <Modal open={open} onClose={() => navigate(-1)}>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
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
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
