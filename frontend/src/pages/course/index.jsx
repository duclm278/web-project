import { Container, Grid } from "@mui/material";
import CourseDetails from "./CourseDetails";
import CoursePurchase from "./CoursePurchase";

export default function Course() {
  return (
    <Container sx={{ maxWidth: 900, marginTop: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <CourseDetails />
        </Grid>
        <Grid item xs={4}>
          <CoursePurchase />
        </Grid>
      </Grid>
    </Container>
  );
}
