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
import api from "../app/apiService";

export default function JobDetailModal({ id, open, onClose }) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Thiếu ID job");
      setLoading(false);
      return;
    }

    console.log("Modal received id:", id);

    setLoading(true);
    setError(null);

    api
      .get(`/jobs/${encodeURIComponent(id)}`)
      .then((res) => {
        console.log("API response:", res.data);
        setJob(res.data);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Không tìm thấy job hoặc server lỗi");
        setJob(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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
