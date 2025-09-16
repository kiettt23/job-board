// -------------------- Imports --------------------
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import JobCard from "../../components/JobCard";
import api from "../../app/api/apiService";
import { JOBS_PER_PAGE } from "../../app/constants";

// -------------------- Jobs Page --------------------
export default function Jobs() {
  // -------------------- State --------------------
  const { searchTerm } = useOutletContext();
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // -------------------- Derived Values --------------------
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  // -------------------- Effects --------------------
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await api.get("/jobs");
        setAllJobs(res.data);
        setFilteredJobs(res.data);
        setJobs(res.data.slice(0, JOBS_PER_PAGE));
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          // eslint-disable-next-line no-console
          console.error("Fetch jobs error:", err);
        }
        setError("Không thể tải dữ liệu. Thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
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
    setPage(1);
  }, [searchTerm, allJobs]);

  useEffect(() => {
    if (filteredJobs.length > 0) {
      const start = (page - 1) * JOBS_PER_PAGE;
      const end = start + JOBS_PER_PAGE;
      setJobs(filteredJobs.slice(start, end));
    } else {
      setJobs([]);
    }
  }, [page, filteredJobs]);

  // -------------------- Render --------------------
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Job Listings
      </Typography>

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

      {totalPages > 1 && (
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
          {/* Prev */}
          <Button
            variant="text"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            &lt;
          </Button>

          {/* Pages */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (p) =>
                p === 1 || p === totalPages || (p >= page - 2 && p <= page + 2)
            )
            .map((p, idx, arr) => {
              const prev = arr[idx - 1];
              const showDots = prev && p - prev > 1;
              return (
                <Box key={p} sx={{ display: "flex", alignItems: "center" }}>
                  {showDots && <Typography sx={{ mx: 1 }}>...</Typography>}
                  <Button
                    variant={page === p ? "contained" : "outlined"}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </Button>
                </Box>
              );
            })}

          {/* Next */}
          <Button
            variant="text"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            &gt;
          </Button>
        </Box>
      )}
    </Box>
  );
}
