import PropTypes from "prop-types";
import { Box, Typography, Rating, Paper } from "@mui/material";
import CourseContent from "./CourseContent";
import { useState, useEffect } from "react";
import ratingService from "../../services/rating";

export default function CourseDetail(props) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchTotalRating = async () => {
      try {
        const totalRating = await ratingService.getTotalRating(props.course.id);
        setRating(totalRating.totalRating);
      } catch (err) {
        setRating(0);
      }
    };

    fetchTotalRating();
  }, [props.course.id]);

  return (
    <Box>
      <Box>
        <Typography variant="h2" component="h1">
          <b>{props.course.name}</b>
        </Typography>
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Rating name="read-only" value={rating} precision={0.1} readOnly />
          <Typography variant="body" component="p">
            {rating}
          </Typography>
          <Typography variant="body" component="p" sx={{ marginLeft: 1 }}>
            {props.course.studentsEnrolled} students
          </Typography>
        </Box>
      </Box>
      <Paper elevation={2} sx={{ marginY: 5, paddingY: 2 }}>
        <Typography variant="h5" component="h2" sx={{ marginLeft: 2 }}>
          <b>Description</b>
        </Typography>
        <Box>
          <Typography
            variant="body"
            component="p"
            sx={{ marginLeft: 3, marginTop: 2 }}
          >
            {props.course.description}
          </Typography>
        </Box>
      </Paper>

      <Typography variant="h5" component="h2">
        <b>Course content</b>
      </Typography>
      <Typography variant="subtitle2" component="p">
        {props.course.lessons?.length ?? 0} lessons
      </Typography>
      <CourseContent lessons={props.course.lessons} sx={{ marginBottom: 5 }} />
    </Box>
  );
}

CourseDetail.propTypes = {
  course: PropTypes.object,
};
