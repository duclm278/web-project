import PropTypes from "prop-types";
import { Box, Typography, Rating, Paper } from "@mui/material";
import CourseContent from "./CourseContent";

export default function CourseDetail(props) {
  return (
    <Box>
      <Box>
        <Typography variant="h2" component="h1">
          <b>{props.course.name}</b>
        </Typography>
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
          <Typography variant="body" component="p">
            (0 ratings)
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
