import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const baseUrl = VITE_APP_BASE_URL + "/notes";
console.log("VITE_APP_BASE_URL", import.meta.env.VITE_APP_BASE_URL);

const search = async (token, queryObject) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // Build query string
  let queryString = "?";
  for (const [key, value] of Object.entries(queryObject)) {
    queryString += `${key}=${value}&`;
  }
  queryString = queryString.slice(0, -1);
  const response = await axios.get(`${baseUrl}${queryString}`, config);
  return response.data;
};

const getOne = async (token, noteId) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`${baseUrl}/${noteId}`, config);
  return response.data;
};

const create = async (token, object) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(baseUrl, object, config);
  return response.data;
};

const update = async (token, noteId, object) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.patch(`${baseUrl}/${noteId}`, object, config);
  return response.data;
};

const remove = async (token, noteId) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.delete(`${baseUrl}/${noteId}`, config);
  return response.data;
};

export default { search, getOne, create, update, remove };
