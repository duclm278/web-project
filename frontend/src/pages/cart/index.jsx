import { Container, Grid, Typography } from "@mui/material";
import CartItem from "./CartItem";
import CartConfirm from "./CartConfirm";

export default function Cart() {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Typography variant="h3" component="h1" sx={{ marginY: 3 }}>
            <b>Shopping Cart</b>
          </Typography>
          <Typography variant="body1" component="p">
            <b>1 Course in Cart</b>
          </Typography>
          <hr />
          <CartItem />
        </Grid>
        <Grid item xs={4}>
          <CartConfirm />
        </Grid>
      </Grid>
    </Container>
  );
}
