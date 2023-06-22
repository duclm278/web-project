import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const baseUrl = VITE_APP_BASE_URL + "/enroll";
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

const enroll = async (token, courseId) => {
  const response = await axios.post(`${baseUrl}`, courseId, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const unenroll = async (token, id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { getAll, getOne, enroll, unenroll };
