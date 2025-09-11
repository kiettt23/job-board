import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import JobCard from "../components/JobCard";
import api from "../app/apiService";

export default function Jobs() {
  // State quản lý dữ liệu và trạng thái
  const [jobs, setJobs] = useState([]); // danh sách job từ API
  const [loading, setLoading] = useState(true); // trạng thái đang fetch
  const [error, setError] = useState(null); // nếu fetch fail
  const [page, setPage] = useState(1); // trang hiện tại

  // Hàm fetch data từ API
  const fetchJobs = async (page) => {
    try {
      setLoading(true); // bật loading khi bắt đầu fetch
      setError(null); // reset error
      const res = await api.get("/jobs", {
        params: { _page: page, _limit: 5 }, // server-side pagination
      });
      setJobs(res.data); // lưu data vào state
    } catch (err) {
      setError("Không thể tải dữ liệu. Thử lại sau.");
    } finally {
      setLoading(false); // tắt loading
    }
  };

  // Gọi fetchJobs khi component mount hoặc page thay đổi
  useEffect(() => {
    fetchJobs(page);
  }, [page]);

  // Render UI
  return (
    <Box>
      {/* Nếu đang loading */}
      {loading && <Typography>Đang tải dữ liệu...</Typography>}

      {/* Nếu có lỗi */}
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {/* Nếu có job data */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {jobs.map((job) => (
          <Grid xs={12} sm={6} md={4} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination buttons (demo, sau này sync URL ở Milestone 5) */}
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
