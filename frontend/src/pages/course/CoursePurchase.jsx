import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { formatPrice } from "../../utils/formatter";
import cartService from "../../services/cart";
import enrollService from "../../services/enroll";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CoursePurchase(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
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
          <Button
            onClick={addToCart}
            disabled={bought}
            variant="contained"
            sx={{ marginTop: 2, paddingY: 2 }}
          >
            Add to cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

CoursePurchase.propTypes = {
  course: PropTypes.object,
};
