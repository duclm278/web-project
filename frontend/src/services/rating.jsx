import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const baseUrl = VITE_APP_BASE_URL + "/ratings";

const getRatings = async (courseId) => {
  const response = await axios.get(`${baseUrl}/${courseId}`);
  return response.data;
};

const getTotalRating = async (courseId) => {
  const response = await axios.get(`${baseUrl}/total/${courseId}`);
  return response.data;
};

const addRating = async (courseId, userId, comment, score) => {
  const response = await axios.post(`${baseUrl}`, {
    courseId,
    userId,
    comment,
    score,
  });
  return response.data;
};

export default { getRatings, getTotalRating, addRating };
