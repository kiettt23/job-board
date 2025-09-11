import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid"; // ✅ Grid v7
import { Box, Button, Typography } from "@mui/material";
import JobCard from "../components/JobCard";
import api from "../app/apiService";

export default function Jobs() {
  const [jobs, setJobs] = useState([]); // danh sách job từ API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchJobs = async (page) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get("/jobs", {
        params: { _page: page, _limit: 5 },
      });
      setJobs(res.data);
    } catch (err) {
      setError("Không thể tải dữ liệu. Thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  return (
    <Box>
      {loading && <Typography>Đang tải dữ liệu...</Typography>}

      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {/* ✅ Grid v7 API */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {jobs.map((job) => (
          <Grid key={job.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
        <Button
          variant="text"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          &lt;
        </Button>
        <Button
          variant={page === 1 ? "contained" : "outlined"}
          onClick={() => setPage(1)}
        >
          1
        </Button>
        <Button
          variant={page === 2 ? "contained" : "outlined"}
          onClick={() => setPage(2)}
        >
          2
        </Button>
        <Button
          variant={page === 3 ? "contained" : "outlined"}
          onClick={() => setPage(3)}
        >
          3
        </Button>
        <Button variant="text" onClick={() => setPage((p) => p + 1)}>
          &gt;
        </Button>
      </Box>
    </Box>
  );
}
