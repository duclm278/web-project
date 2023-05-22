import axios from "axios";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001";

const baseUrl = VITE_APP_BASE_URL + "/api/courses";

const getAllCourses = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getCourseById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAllCourses, getCourseById };
