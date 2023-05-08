import { Box, Button, Grid, Rating, Typography } from "@mui/material";

export default function CartItem() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Box
            src="https://img-c.udemycdn.com/course/480x270/543600_64d1_4.jpg"
            alt=""
            component="img"
            sx={{
              maxWidth: 120,
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" component="h4">
            <b>Automate the Boring Stuff with Python Programming</b>
          </Typography>
          <Typography variant="subtitle1" component="p">
            By Al Sweigart
          </Typography>
          <Box display={"flex"}>
            <Typography variant="body1" component="p">
              4.6
            </Typography>
            <Rating name="read-only" value={4.6} precision={0.1} readOnly />
            <Typography variant="subtitle1" component="p">
              (107,151 ratings)
            </Typography>
          </Box>
          <Typography variant="subtitle1" component="p">
            9.5 total hours • 51 lectures
          </Typography>
          <Box display={"flex"}>
            <Button variant="text">Remove</Button>
            <Button variant="text">Save for Later</Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5" component="h5">
            <b>₫349,000</b>
          </Typography>
        </Grid>
      </Grid>
      <hr />
    </>
  );
}
