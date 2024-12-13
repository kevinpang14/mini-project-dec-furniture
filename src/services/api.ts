import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://furniture-api-lumoshive-academy.vercel.app/api",
});

export default apiClient;
