import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { formatPrice } from "../../utils/formatter";

export default function CartConfirm(props) {
  return (
    <Card sx={{ marginTop: 8 }}>
      <CardContent>
        <Box>
          <Typography variant="body1" component="p">
            <b>Total:</b>
          </Typography>
          <Typography variant="h3" component="h2" sx={{ marginY: 3 }}>
            <b>₫{formatPrice(props.cart?.subtotal ?? 0)}</b>
          </Typography>
          <Button variant="contained" sx={{ paddingY: 2 }} fullWidth>
            <b>Checkout</b>
          </Button>
        </Box>
        <hr />
        <Box>
          <Typography variant="body1" component="p" paddingTop={2}>
            <b>Promotions</b>
          </Typography>
          <Box display="flex">
            <TextField label="Enter coupon" variant="standard" fullWidth />
            <Button variant="outlined">
              <Typography variant="body2" component="p">
                Apply
              </Typography>
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

CartConfirm.propTypes = {
  cart: PropTypes.object,
};
