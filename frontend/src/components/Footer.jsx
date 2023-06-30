import { Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Group 5
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
