import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import cartService from "../../services/cart";
import enrollService from "../../services/enroll";
import { formatPrice } from "../../utils/formatter";

export default function CoursePurchase(props) {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [bought, setBought] = useState(false);

  useEffect(() => {
    const checkBought = async () => {
      try {
        await enrollService.getOne(user.token, props.course.id);
        setBought(true);
      } catch {
        setBought(false);
      }
    };

    checkBought();
  }, [user, props.course.id]);

  const addToCart = async () => {
    try {
      await cartService.addToCart(
        user._id,
        props.course.id,
        props.course.price,
        user.token
      );
      navigate("/cart");
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia height="150" component="img" src={props.course.coverImage} />
      <CardContent>
        <Box
          paddingY={2}
          paddingX={3}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography variant="h4" component="h2" textAlign={"center"}>
            <b>₫{formatPrice(props.course?.price ?? 0)}</b>
          </Typography>
          {bought ? (
            <Button
              onClick={() => navigate(`/learn/${props.course.id}`)}
              variant="contained"
              sx={{ marginTop: 2, paddingY: 2 }}
            >
              Go to course
            </Button>
          ) : (
            <Button
              onClick={addToCart}
              variant="contained"
              sx={{ marginTop: 2, paddingY: 2 }}
            >
              Add to cart
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

CoursePurchase.propTypes = {
  course: PropTypes.object,
};
