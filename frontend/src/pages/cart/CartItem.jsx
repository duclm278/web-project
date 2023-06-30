import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import cartService from "../../services/cart";
import courseService from "../../services/course";
import ratingService from "../../services/rating";
import { formatPrice } from "../../utils/formatter";

//TODO: Rating
export default function CartItem(props) {
  const { user } = useAuthContext();
  const [course, setCourse] = useState({});
  const [rating, setRating] = useState(0);
  const removeFromCart = async () => {
    try {
      await cartService.removeFromCart(
        user._id,
        course.id,
        course.price,
        user.token
      );
      await props.fetchCart();
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await courseService.getOne(props.courseId);
        setCourse(data);
      } catch (e) {
        alert(e);
      }
    };

    const fetchTotalRating = async () => {
      try {
        const totalRating = await ratingService.getTotalRating(props.courseId);
        setRating(totalRating.totalRating);
      } catch (err) {
        setRating(0);
      }
    };

    fetchCourse();
    fetchTotalRating();
  }, [props.courseId]);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Box
            src={course.coverImage}
            alt=""
            component="img"
            sx={{
              maxWidth: 120,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" component="h4">
            <b>{course.name}</b>
          </Typography>
          <Box display={"flex"}>
            <Typography variant="body1" component="p">
              {rating}
            </Typography>
            <Rating name="read-only" value={rating} precision={0.1} readOnly />
          </Box>
          <Typography variant="subtitle1" component="p">
            {course.lessons?.length ?? 0} lectures
          </Typography>
          <Box display={"flex"}>
            <Button onClick={removeFromCart} variant="text">
              Remove
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5" component="h5">
            <b>₫{formatPrice(course?.price ?? 0)}</b>
          </Typography>
        </Grid>
      </Grid>
      <hr />
    </>
  );
}

CartItem.propTypes = {
  courseId: PropTypes.string,
  fetchCart: PropTypes.func,
};
