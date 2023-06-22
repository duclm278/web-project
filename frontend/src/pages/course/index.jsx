import { Container, Grid } from "@mui/material";
import CourseDetails from "./CourseDetails";
import CoursePurchase from "./CoursePurchase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courseService from "../../services/course";

export default function Course() {
  const params = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await courseService.getCourseById(params.courseId);
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
          <CoursePurchase course={course} />
        </Grid>
      </Grid>
    </Container>
  );
}
