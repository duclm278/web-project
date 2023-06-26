import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import CartConfirm from "./CartConfirm";
import cartService from "../../services/cart";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  async function fetchCart() {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = await cartService.getUserCart(user._id, user.token);
      setCart(data);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ marginTop: 5, height: "100vh" }}>
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <Typography variant="h3" component="h1" sx={{ marginY: 3 }}>
              <b>Shopping Cart</b>
            </Typography>
            <Typography variant="body1" component="p">
              <b>{cart?.items?.length ?? 0} Course(s) in Cart</b>
            </Typography>
            {cart?.items?.length > 0 && <hr />}
            {cart?.items?.map((item) => {
              return (
                <CartItem
                  courseId={item.courseId}
                  key={item.courseId}
                  fetchCart={fetchCart}
                />
              );
            })}
          </Grid>
          {cart?.items?.length > 0 && (
            <Grid item xs={4}>
              <CartConfirm cart={cart} />
            </Grid>
          )}
        </Grid>
        {cart?.items?.length === 0 && (
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #aaa",
              paddingY: "10rem",
            }}
          >
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h2" component="h1" fontWeight="bold">
                Your cart is empty
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => navigate("/")}
                variant="contained"
                sx={{ paddingY: 1.5 }}
              >
                <b>Keep shopping</b>
              </Button>
            </Box>
          </Box>
        )}
      </Container>
      <Footer />
    </>
  );
}
