import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Job Routing
        </Typography>
        <Typography>Sign In</Typography>
      </Toolbar>
    </AppBar>
  );
}
