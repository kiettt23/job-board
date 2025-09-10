import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import jobs from "../data/jobs";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Job not found
        </Typography>
        <Button component={RouterLink} to="/" variant="contained">
          Back
        </Button>
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
        {job.title}
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
        {job.skills.slice(0, 4).map((s) => (
          <Chip key={s} label={s} size="small" />
        ))}
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {job.description}
      </Typography>

      <Button component={RouterLink} to="/" variant="contained" color="primary">
        Back to list
      </Button>
    </Paper>
  );
}
