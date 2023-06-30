import { Box, Grid, Rating, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { formatPrice } from "../../utils/formatter";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ratingService from "../../services/rating";

export default function SearchItem(props) {
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
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Link to={`/course/${props.course.id}`}>
            <Box
              src={props.course.coverImage}
              alt=""
              component="img"
              sx={{
                width: 180,
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={8}>
          <Link
            to={`/course/${props.course.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="body1" component="h4" fontSize="1.5em">
              <b>{props.course.name}</b>
            </Typography>
          </Link>
          <Box display={"flex"}>
            <Typography variant="body1" component="p">
              {rating}
            </Typography>
            <Rating name="read-only" value={rating} precision={0.1} readOnly />
          </Box>
          <Typography variant="subtitle1" component="p">
            {props.course.lessons?.length ?? 0} lectures
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5" component="h5">
            <b>₫{formatPrice(props.course?.price ?? 0)}</b>
          </Typography>
        </Grid>
      </Grid>
      <hr />
    </>
  );
}

SearchItem.propTypes = {
  course: PropTypes.object,
};
