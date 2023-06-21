import { Container, Grid } from "@mui/material";
import CourseDetails from "./CourseDetails";
import CoursePurchase from "./CoursePurchase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Course() {
  const params = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/courses/${params.courseId}`
        );
        const data = await response.json();
        console.log(data);
        setCourse(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchCourse();
  }, [params.courseId]);

  return (
    <Container sx={{ maxWidth: 900, marginTop: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <CourseDetails course={course} />
        </Grid>
        <Grid item xs={4}>
          <CoursePurchase
            image={course.coverImage}
            price={course?.price ?? 0}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
