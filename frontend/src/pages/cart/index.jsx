import { Container, Grid, Typography } from "@mui/material";
import { useCallback, useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartConfirm from "./CartConfirm";
import cartService from "../../services/cart";

export default function Cart() {
  const [cart, setCart] = useState(null);

  const fetchCart = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = await cartService.getUserCart(user._id, user.token);
      setCart(data);
    } catch (e) {
      alert(e);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Typography variant="h3" component="h1" sx={{ marginY: 3 }}>
            <b>Shopping Cart</b>
          </Typography>
          <Typography variant="body1" component="p">
            <b>{cart?.items?.length ?? 0} Course(s) in Cart</b>
          </Typography>
          <hr />
          {cart?.items?.map((item) => {
            return <CartItem courseId={item.courseId} key={item.courseId} />;
          })}
        </Grid>
        <Grid item xs={4}>
          <CartConfirm cart={cart} />
        </Grid>
      </Grid>
    </Container>
  );
}
