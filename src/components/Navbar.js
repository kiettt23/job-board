import { AppBar, Toolbar, Typography, Box, Button, Paper } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        {/* Title left */}
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Job Routing
        </Typography>

        {/* Fake search box (Paper + Box) để bám đúng “What to Use” */}
        <Paper
          sx={{
            ml: 2,
            px: 2,
            py: 0.75,
            flexGrow: 1,
            display: { xs: "none", sm: "block" },
            opacity: 0.9,
          }}
        >
          <Box sx={{ color: "text.secondary", fontSize: 14 }}>Search…</Box>
        </Paper>

        {/* Sign in (ẩn bớt trên mobile) */}
        <Box sx={{ ml: "auto", display: { xs: "none", sm: "block" } }}>
          <Button color="inherit">Sign in</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
