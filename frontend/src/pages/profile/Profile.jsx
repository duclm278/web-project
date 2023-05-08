import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import { ProfileForm } from "./ProfileForm";

const joinedCourses = [
  {
    id: 1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    description:
      "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    title: "The Complete JavaScript Course 2021: From Zero to Expert!",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    image: "https://source.unsplash.com/random",
  },
];

// Profile shows basic user information and a list of joined courses
export default function Profile() {
  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: 128,
                  height: 128,
                  mt: 1,
                  mb: 2,
                }}
              />
              <Typography component="h1" variant="h5" align="center">
                John Doe
              </Typography>
              <Typography variant="subtitle1" align="center">
                Joined since 2021
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography component="h1" variant="h4" align="center" mb={3}>
              User Profile
            </Typography>
            <ProfileForm />
            <Typography component="h2" variant="h6" my={2}>
              Joined Courses
            </Typography>
            <Grid container spacing={3}>
              {joinedCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

function CourseCard({ course }) {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 2, display: "flex", flexDirection: "column" }}
    >
      <img src={course.image} alt={course.title} />
      <Typography component="h3" variant="subtitle1" mt={2}>
        {course.title.length > 50
          ? course.title.substring(0, 50) + "..."
          : course.title}
      </Typography>
    </Paper>
  );
}
