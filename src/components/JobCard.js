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

export default function JobCard({ job }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    // Điều hướng kèm state background
    navigate(`/job/${job.id}`, {
      state: { background: location, jobId: job.id },
    });
  };

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

      {/* Skills (max 4) */}
      <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
        {job.skills.slice(0, 4).map((skill) => (
          <Chip key={skill} label={skill} size="small" />
        ))}
      </Stack>

      <Divider sx={{ mb: 1 }} />

      {/* Description (clamp 3 lines) */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
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

      {/* Learn more → route detail */}
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
