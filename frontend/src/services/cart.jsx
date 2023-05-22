import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001";

const baseUrl = VITE_APP_BASE_URL + "/api/carts";

const createCart = async (userId) => {
  const response = await axios.post(`${baseUrl}`, {
    userId: userId,
    items: [],
  });
  localStorage.setItem("hasCart", "true");
  return response.data;
};

const getUserCart = async (userId, token) => {
  if (localStorage.getItem("hasCart")) {
    const response = await axios.get(`${baseUrl}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } else {
    const response = await createCart(userId);
    return response.data;
  }
};

const addToCart = async (userId, courseId, coursePrice, token) => {
  const cart = await getUserCart(userId, token);
  cart.items?.push({ courseId: courseId });
  cart.subtotal += coursePrice;
  const updatedCart = await axios.put(`${baseUrl}/${cart._id}`, { cart });
  return updatedCart.data;
};

const removeFromCart = async (userId, courseId, coursePrice, token) => {
  const cart = await getUserCart(userId, token);
  console.log(cart);
  cart.items = cart.items?.filter((course) => course.courseId != courseId);
  cart.subtotal -= coursePrice;
  const updatedCart = await axios.put(`${baseUrl}/${cart._id}`, { cart });
  return updatedCart.data;
};

const deleteCart = async (userId, token) => {
  const cart = await getUserCart(userId, token);
  localStorage.removeItem("hasCart");
  await axios.delete(`${baseUrl}/${cart._id}`);
};
export default { getUserCart, addToCart, removeFromCart, deleteCart };
