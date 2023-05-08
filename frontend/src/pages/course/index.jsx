import { Container, Grid } from "@mui/material";
import CourseDetail from "./CourseDetail";
import CoursePurchase from "./CoursePurchase";

export default function Course() {
  return (
    <Container sx={{ maxWidth: 900, marginTop: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <CourseDetail />
        </Grid>
        <Grid item xs={4}>
          <CoursePurchase />
        </Grid>
      </Grid>
    </Container>
  );
}
