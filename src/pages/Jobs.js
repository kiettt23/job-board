import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography, TextField } from "@mui/material";
import JobCard from "../components/JobCard";
import api from "../app/apiService";
import { JOBS_PER_PAGE } from "../app/config";

export default function Jobs() {
  const [allJobs, setAllJobs] = useState([]); // toàn bộ job từ API
  const [jobs, setJobs] = useState([]); // job hiển thị theo page
  const [page, setPage] = useState(1); // trang hiện tại
  const [searchTerm, setSearchTerm] = useState(""); // từ khoá search
  const [filteredJobs, setFilteredJobs] = useState([]); // job sau khi filter
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const totalPages = Math.ceil(allJobs.length / JOBS_PER_PAGE);

  // fetch toàn bộ job 1 lần
  const fetchAllJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api.get("/jobs");
      console.log("📥 Fetched all jobs:", res.data.length);

      // mặc định page = 1
      const start = 0;
      const end = JOBS_PER_PAGE;
      console.log(`📑 Init slice: start=${start}, end=${end}`);
      setAllJobs(res.data);
      setFilteredJobs(res.data); // ✅ init filteredJobs = all
      setJobs(res.data.slice(start, end));
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError("Không thể tải dữ liệu. Thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  // lần đầu load
  useEffect(() => {
    console.log("🚀 useEffect mount → fetchAllJobs");
    fetchAllJobs();
  }, []);

  // khi searchTerm thay đổi → filter lại
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredJobs(allJobs);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredJobs(
        allJobs.filter(
          (job) =>
            job.title.toLowerCase().includes(term) ||
            job.description.toLowerCase().includes(term)
        )
      );
    }
    setPage(1); // reset về page đầu mỗi lần search
  }, [searchTerm, allJobs]);

  // khi page hoặc filteredJobs thay đổi → slice lại data
  useEffect(() => {
    if (filteredJobs.length > 0) {
      const start = (page - 1) * JOBS_PER_PAGE;
      const end = start + JOBS_PER_PAGE;
      console.log(
        `🔄 Page changed: page=${page}, slicing filteredJobs[${start}:${end}]`
      );
      setJobs(filteredJobs.slice(start, end));
    } else {
      setJobs([]); // nếu không có kết quả
    }
  }, [page, filteredJobs]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Job Listings
      </Typography>

      {/* ✅ Search box */}
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          label="Search jobs"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {loading && <Typography>Đang tải dữ liệu...</Typography>}
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {jobs.map((job) => (
          <Grid key={job.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <JobCard job={job} />
          </Grid>
        ))}
        {!loading && jobs.length === 0 && (
          <Typography>❌ Không tìm thấy công việc nào</Typography>
        )}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
          <Button
            variant="text"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            &lt;
          </Button>

          {/* Pagination numbers with window */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (p) =>
                p === 1 || // luôn hiện trang 1
                p === totalPages || // luôn hiện trang cuối
                (p >= page - 2 && p <= page + 2) // hiện 2 trang quanh current
            )
            .map((p, idx, arr) => {
              // thêm dấu ... khi bị skip
              const prev = arr[idx - 1];
              const showDots = prev && p - prev > 1;

              return (
                <Box key={p} sx={{ display: "flex", alignItems: "center" }}>
                  {showDots && <Typography sx={{ mx: 1 }}>...</Typography>}
                  <Button
                    variant={page === p ? "contained" : "outlined"}
                    onClick={() => {
                      console.log("🔢 Page clicked:", p);
                      setPage(p);
                    }}
                  >
                    {p}
                  </Button>
                </Box>
              );
            })}

          <Button
            variant="text"
            disabled={page === totalPages}
            onClick={() => {
              console.log("➡ Next clicked, newPage=", page + 1);
              setPage((p) => p + 1);
            }}
          >
            &gt;
          </Button>
        </Box>
      )}
    </Box>
  );
}
