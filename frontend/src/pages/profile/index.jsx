import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import enrollService from "../../services/enroll";
import { ProfileForm } from "./ProfileForm";

// Profile shows basic user information and a list of joined courses
export default function Profile() {
  const [joinedCourses, setJoinedCourses] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    const request = async () => {
      try {
        const enrolled = await enrollService.getAll(token);
        setJoinedCourses(enrolled);
      } catch (err) {
        console.log(err);
      }
    };

    request();
  }, []);

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
              <Typography
                component="h1"
                variant="h5"
                fontWeight="bold"
                align="center"
              >
                {JSON.parse(localStorage.getItem("user")).firstName}{" "}
                {JSON.parse(localStorage.getItem("user")).lastName}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              component="h1"
              variant="h4"
              fontWeight="bold"
              align="center"
              mb={3}
            >
              Basic Info
            </Typography>
            <ProfileForm />
          </Grid>
        </Grid>

        <Box mt={2} p={4}>
          <Typography
            component="h2"
            variant="h6"
            fontWeight="bold"
            mb={2}
            ml={2}
          >
            Joined Courses
          </Typography>
          <Grid container spacing={3}>
            {joinedCourses.map((course) => (
              <Grid key={course._id} item xs={12} sm={6} md={4}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Box>
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
      <img src={course.coverImage} alt={course.name} />
      <Typography component="h3" variant="subtitle1" mt={2}>
        {course.name.length > 50
          ? course.name.substring(0, 50) + "..."
          : course.name}
      </Typography>
    </Paper>
  );
}
