import { Container, Grid, Typography } from "@mui/material";
import PaymentDetails from "./PaymentDetails";
import OrderDetails from "./OrderDetails";
import Summary from "./Summary";

export default function Checkout() {
  return (
    <Container>
      <Grid container spacing={7}>
        <Grid item xs={7}>
          <Typography variant="h3" component="h1" sx={{ marginY: 3 }}>
            <b>Checkout</b>
          </Typography>
          <PaymentDetails />
          <OrderDetails />
        </Grid>
        <Grid item xs={5}>
          <Summary />
        </Grid>
      </Grid>
    </Container>
  );
}
