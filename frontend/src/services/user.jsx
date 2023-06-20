import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001";

const baseUrl = VITE_APP_BASE_URL + "/api/users";
console.log("VITE_APP_BASE_URL", import.meta.env.VITE_APP_BASE_URL);

const login = async (email, password) => {
  const response = await axios.post(`${baseUrl}/login`, { email, password });
  return response.data;
};

const signup = async (email, password) => {
  const response = await axios.post(`${baseUrl}/signup`, { email, password });
  return response.data;
};

export default { login, signup };
