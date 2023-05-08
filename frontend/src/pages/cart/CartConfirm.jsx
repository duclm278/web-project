import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

export default function CartConfirm() {
  return (
    <Card sx={{ marginTop: 8 }}>
      <CardContent>
        <Box>
          <Typography variant="body1" component="p">
            <b>Total:</b>
          </Typography>
          <Typography variant="h3" component="h2" sx={{ marginY: 3 }}>
            <b>₫698,000</b>
          </Typography>
          <Button variant="contained">Checkout</Button>
        </Box>
        <hr />
        <Box>
          <Typography variant="body1" component="p">
            <b>Promotions</b>
          </Typography>
          <Box display="flex">
            <TextField label="Enter coupon" variant="standard" />
            <Button variant="contained">Apply</Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
