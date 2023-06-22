import { Card, CardContent, Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import { formatPrice } from "../../utils/formatter";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const STRIPE_KEY = import.meta.env.VITE_STRIPE_KEY || "";

export default function CartConfirm(props) {
  const [stripeToken, setStripeToken] = useState(null);
  const amount = props.cart?.subtotal ?? 0;

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makePaymentRequest = async () => {
      try {
        const res = await axios.post("http://localhost:3001/api/checkout", {
          tokenId: stripeToken.id,
          amount: amount,
        });

        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    makePaymentRequest();
  }, [stripeToken, amount]);

  return (
    <Card sx={{ marginTop: 8 }}>
      <CardContent>
        <Box>
          <Typography variant="body1" component="p">
            <b>Total:</b>
          </Typography>
          <Typography variant="h3" component="h2" sx={{ marginY: 3 }}>
            <b>₫{formatPrice(amount)}</b>
          </Typography>
          <StripeCheckout
            name="Online Learning Platform"
            image="https://st4.depositphotos.com/36923632/39389/v/450/depositphotos_393896416-stock-illustration-outline-online-learning-icon-online.jpg"
            panelLabel="Pay"
            billingAddress
            description={`Your total is ₫${formatPrice(amount)}`}
            amount={amount}
            currency="VND"
            token={onToken}
            stripeKey={STRIPE_KEY}
          >
            <Button variant="contained" sx={{ paddingY: 2 }} fullWidth>
              <b>Checkout</b>
            </Button>
          </StripeCheckout>
          <hr />
          <Button variant="outlined" sx={{ paddingY: 2 }} fullWidth>
            <b>Back to browsing</b>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

CartConfirm.propTypes = {
  cart: PropTypes.object,
};
