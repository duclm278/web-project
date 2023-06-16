import { Container, Grid, Paper, Typography } from "@mui/material";
import LearningVideo from "./LearningVideo";
import LearningList from "./LearningList";

export default function Learning() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9} lg={9}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center" mb={3}>
              Learning
            </Typography>
            <LearningVideo />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center" mb={3}>
              Sidebar
            </Typography>
            <LearningList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
