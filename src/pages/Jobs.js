import { Grid, Box, Button } from "@mui/material";
import jobs from "../data/jobs";
import JobCard from "../components/JobCard";

export default function Jobs() {
  const firstPageJobs = jobs.slice(0, 5); // đúng user story: hiển thị 5 job

  return (
    <Box>
      {/* Grid responsive: xs=1 col, sm=2 col, md=3 col */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {firstPageJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination buttons (NON-FUNCTIONING theo yêu cầu) */}
      <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
        <Button variant="text" disabled>
          &lt;
        </Button>
        <Button variant="contained" color="primary">
          1
        </Button>
        <Button variant="outlined" color="primary">
          2
        </Button>
        <Button variant="outlined" color="primary">
          3
        </Button>
        <Button variant="text">&gt;</Button>
      </Box>
    </Box>
  );
}
