import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const baseUrl = VITE_APP_BASE_URL + "/carts";

const createCart = async (userId) => {
  try {
    const response = await axios.post(`${baseUrl}`, {
      userId: userId,
      items: [],
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserCart = async (userId, token) => {
  try {
    const response = await axios.get(`${baseUrl}/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch {
    const response = await createCart(userId);
    return response;
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
  await axios.delete(`${baseUrl}/${cart._id}`);
  return;
};
export default { getUserCart, addToCart, removeFromCart, deleteCart };
