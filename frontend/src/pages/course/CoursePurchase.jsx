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

export default function CoursePurchase(props) {
  const addToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await cartService.addToCart(
        user._id,
        props.course.id,
        props.course.price,
        user.token
      );
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia height="120" component="img" src={props.course.coverImage} />
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
          <Button onClick={addToCart} variant="contained" sx={{ marginY: 2 }}>
            Add to cart
          </Button>
          <Button variant="outlined">Buy now</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

CoursePurchase.propTypes = {
  course: PropTypes.object,
};
