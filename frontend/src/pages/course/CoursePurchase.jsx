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

export default function CoursePurchase(props) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia height="120" component="img" src={props.image} />
      <CardContent>
        <Box
          paddingY={2}
          paddingX={3}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography variant="h4" component="h2" textAlign={"center"}>
            <b>₫{formatPrice(props.price)}</b>
          </Typography>
          <Button variant="contained" sx={{ marginY: 2 }}>
            Add to cart
          </Button>
          <Button variant="outlined">Buy now</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

CoursePurchase.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
};
