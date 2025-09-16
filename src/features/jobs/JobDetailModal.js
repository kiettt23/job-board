// -------------------- Imports --------------------
import { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  Chip,
  Divider,
  CircularProgress,
} from "@mui/material";
import api from "../../app/api/apiService";

// -------------------- Job Detail Modal --------------------
export default function JobDetailModal({ id, open, onClose }) {
  // -------------------- State --------------------
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // -------------------- Effects --------------------
  useEffect(() => {
    if (!id) {
      setError("Thiếu ID job");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    api
      .get(`/jobs/${encodeURIComponent(id)}`)
      .then((res) => setJob(res.data))
      .catch(() => {
        setError("Không tìm thấy job hoặc server lỗi");
        setJob(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // -------------------- Render --------------------
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 2,
          maxWidth: 600,
          mx: "auto",
          mt: 10,
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : job ? (
          <>
            <Typography variant="h6" gutterBottom>
              {job.title}
            </Typography>
            <Stack direction="row" spacing={1} mb={2}>
              {job.skills?.slice(0, 4).map((s) => (
                <Chip key={s} label={s} />
              ))}
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <Typography>{job.description}</Typography>
          </>
        ) : (
          <Typography color="error">Job không tồn tại</Typography>
        )}
      </Box>
    </Modal>
  );
}
