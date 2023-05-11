import { Card, Box, Button, Typography, CardContent } from "@mui/material";

export default function Summary() {
  return (
    <Card sx={{ paddingX: 2, marginTop: 15, marginX: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ marginY: 2 }}>
          <b>Summary</b>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" component="p">
            Original Price:
          </Typography>
          <Typography variant="subtitle1" component="p">
            ₫349,000
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" component="p">
            Discounts:
          </Typography>
          <Typography variant="subtitle1" component="p">
            -₫0
          </Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" component="p">
            <b>Total:</b>
          </Typography>
          <Typography variant="subtitle1" component="p">
            <b>₫349,000</b>
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ marginTop: 2, paddingY: 2 }}
          fullWidth
        >
          Complete Checkout
        </Button>
      </CardContent>
    </Card>
  );
}
