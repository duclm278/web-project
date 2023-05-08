import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ProfileForm } from "./ProfileForm";

export default function ProfileEdit() {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center" mb={3}>
          User Profile
        </Typography>
        <ProfileForm />
      </Paper>
    </Container>
  );
}
