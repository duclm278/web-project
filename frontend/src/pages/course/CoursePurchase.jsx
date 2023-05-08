import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function CoursePurchase() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://play-lh.googleusercontent.com/wwJX4r_xJD7zv8uqs7C8mvy-KkngaSzyvCf2ZiULy3l-1sbBY2t1jHFZ_bgF8eO_PpU"
      />
      <CardContent>
        <Box
          paddingY={2}
          paddingX={3}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography variant="h4" component="h2" textAlign={"center"}>
            <b>₫449,000</b>
          </Typography>
          <Button variant="contained" sx={{ marginY: 2 }}>
            Add to cart
          </Button>
          <Button variant="outlined">Buy now</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
