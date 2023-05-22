import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const baseUrl = VITE_APP_BASE_URL + "/courses";
console.log("VITE_APP_BASE_URL", import.meta.env.VITE_APP_BASE_URL);

const getAll = async (token) => {
  const response = await axios.get(`${baseUrl}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const getOne = async (token, id) => {
  const response = await axios.get(`${baseUrl}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { getAll, getOne };
