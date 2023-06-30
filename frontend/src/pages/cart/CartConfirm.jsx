import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useAuthContext } from "../../hooks/useAuthContext";
import cartService from "../../services/cart";
import enrollService from "../../services/enroll";
import { formatPrice } from "../../utils/formatter";

const BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";
const STRIPE_KEY = import.meta.env.VITE_STRIPE_KEY || "";

export default function CartConfirm(props) {
  const { user } = useAuthContext();
  const [stripeToken, setStripeToken] = useState(null);
  const amount = props.cart?.subtotal ?? 0;
  const navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    setStripeToken(token);
  };

  useEffect(() => {
    const makePaymentRequest = async () => {
      try {
        await axios.post(`${BASE_URL}/checkout`, {
          tokenId: stripeToken?.id,
          amount: amount,
        });

        for (const course of props.cart.items) {
          await enrollService.enroll(user.token, {
            courseId: course.courseId,
          });
        }

        await cartService.deleteCart(user._id, user.token);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    };

    stripeToken && makePaymentRequest();
  }, [stripeToken, amount, props.cart.items, navigate]);

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
          <Button
            onClick={() => navigate("/")}
            variant="outlined"
            sx={{ paddingY: 2 }}
            fullWidth
          >
            <b>Back to home</b>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

CartConfirm.propTypes = {
  cart: PropTypes.object,
};
