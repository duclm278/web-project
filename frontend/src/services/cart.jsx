import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001";

const baseUrl = VITE_APP_BASE_URL + "/api/carts";

const getUserCart = async (userId, token) => {
  let cart;
  try {
    const response = await axios.get(`${baseUrl}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    cart = response.data;
  } catch {
    const newCartResponse = await axios.post(`${baseUrl}`, {
      data: { userId },
      headers: { Authorization: `Bearer ${token}` },
    });
    cart = newCartResponse.data;
  }
  return cart;
};

const addToCart = async (userId, courseId, coursePrice, token) => {
  const cart = await getUserCart(userId, token);
  cart.items.push(courseId);
  cart.subtotal += coursePrice;
  const updatedCart = await axios.put(`${baseUrl}/${cart._id}`, {
    data: { cart },
    headers: { Authorization: `Bearer ${token}` },
  });
  return updatedCart;
};

const removeFromCart = async (userId, courseId, coursePrice, token) => {
  const cart = await getUserCart(userId, token);
  cart.items = cart.items.filter((id) => id != courseId);
  cart.subtotal += coursePrice;
  const updatedCart = await axios.put(`${baseUrl}/${cart._id}`, {
    data: { cart },
    headers: { Authorization: `Bearer ${token}` },
  });
  return updatedCart;
};

const deleteCart = async (userId, token) => {
  const cart = await getUserCart(userId, token);
  await axios.delete(`${baseUrl}/${cart._id}`);
};
export default { getUserCart, addToCart, removeFromCart, deleteCart };
