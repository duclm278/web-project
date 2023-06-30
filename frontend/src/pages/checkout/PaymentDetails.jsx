import { Box, Grid, Typography, TextField } from "@mui/material";

export default function PaymentDetails() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h2" sx={{ marginY: 2 }}>
          <b>Payment Details</b>
        </Typography>
        <Box display="flex">
          <Box
            component="img"
            src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"
            sx={{ height: 50 }}
          ></Box>
          <Box
            component="img"
            src="https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
            sx={{ height: 50 }}
          ></Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle2" component="p">
            Name on card
          </Typography>
          <Typography variant="body2" component="p">
            REQUIRED
          </Typography>
        </Box>
        <TextField
          id="cardName"
          variant="outlined"
          placeholder="Name on card"
          fullWidth
        />
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle2" component="p">
            Card number
          </Typography>
          <Typography variant="body2" component="p">
            REQUIRED
          </Typography>
        </Box>
        <TextField
          id="cardNumber"
          variant="outlined"
          placeholder="1234 5678 9012 3456"
          fullWidth
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle2" component="p">
              Expiry date
            </Typography>
            <Typography variant="body2" component="p">
              REQUIRED
            </Typography>
          </Box>
          <TextField
            id="cardExpiry"
            variant="outlined"
            placeholder="MM/YY"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle2" component="p">
              CVC/CVV
            </Typography>
            <Typography variant="body2" component="p">
              REQUIRED
            </Typography>
          </Box>
          <TextField
            id="cardCVC"
            variant="outlined"
            placeholder="CVC"
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
}
