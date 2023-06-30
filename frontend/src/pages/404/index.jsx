import { Link } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <img
        src="https://www.commercialfridgerepairs.com.au/wp-content/uploads/2018/11/404-image.gif"
        alt="404 Not Found"
        style={{ width: "300px" }}
      />
      <Typography variant="h4" align="center" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 1 }}
      >
        Go back to home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
