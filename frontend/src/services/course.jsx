import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const baseUrl = VITE_APP_BASE_URL + "/courses";
console.log("VITE_APP_BASE_URL", import.meta.env.VITE_APP_BASE_URL);

const getAll = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const search = async (query) => {
  console.log(query);
  const response = await axios.get(`${baseUrl}/search`, {
    params: { query: query },
  });
  return response.data;
};

export default { getAll, getOne, search };
