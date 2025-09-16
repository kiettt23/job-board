// -------------------- Imports --------------------
import {
  Paper,
  Typography,
  Chip,
  Stack,
  Button,
  Divider,
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../app/contexts/AuthContext";

// -------------------- JobCard Component --------------------
export default function JobCard({ job }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  // -------------------- Handlers --------------------
  const handleClick = () => {
    if (user) {
      // Logged in → open job detail modal
      navigate(`/job/${job.id}`, {
        state: { background: location, jobId: job.id },
      });
    } else {
      // Not logged in → redirect to /login with "from"
      navigate("/login", { state: { from: location } });
    }
  };

  // -------------------- Render --------------------
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        {job.title}
      </Typography>

      {/* Skills */}
      <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
        {job.skills.slice(0, 4).map((skill) => (
          <Chip key={skill} label={skill} size="small" />
        ))}
      </Stack>

      <Divider sx={{ mb: 1 }} />

      {/* Short description (clamped) */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          title={job.description}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.5,
          }}
        >
          {job.description}
        </Typography>
      </Box>

      {/* Action */}
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Learn More
      </Button>
    </Paper>
  );
}
