// -------------------- Imports --------------------
import { useParams, Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import api from "../../app/api/apiService";

// -------------------- Job Detail Page --------------------
export default function JobDetail() {
  const { id } = useParams();

  // -------------------- State --------------------
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // -------------------- Effects --------------------
  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get(`/jobs/${id}`);
        setJob(res.data);
      } catch {
        setError("Không tìm thấy job hoặc server lỗi");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  // -------------------- Render --------------------
  if (loading) return <Typography>Đang tải job...</Typography>;

  if (error) {
    return (
      <Box>
        <Typography variant="h6" color="error" gutterBottom>
          {error}
        </Typography>
        <Button component={RouterLink} to="/" variant="contained">
          Quay lại danh sách
        </Button>
      </Box>
    );
  }

  if (!job) {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Job không tồn tại
        </Typography>
        <Button component={RouterLink} to="/" variant="contained">
          Quay lại danh sách
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
        Quay lại danh sách
      </Button>
    </Paper>
  );
}
