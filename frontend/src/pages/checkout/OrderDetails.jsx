import { Box, Grid, Typography } from "@mui/material";

export default function OrderDetails() {
  return (
    <Box>
      <Typography variant="h5" component="h2" sx={{ marginY: 2 }}>
        <b>Order details</b>
      </Typography>
      <OrderItem />
    </Box>
  );
}

function OrderItem() {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <Box
            src="https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg"
            alt=""
            component="img"
            sx={{
              maxWidth: 70,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" component="p">
            <b>Automate the Boring Stuff with Python Programming</b>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" component="p">
            ₫349,000
          </Typography>
        </Grid>
      </Grid>
      <hr />
    </>
  );
}
