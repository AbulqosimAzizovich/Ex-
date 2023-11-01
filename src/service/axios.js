import axios from "axios";

const api = axios.create({
  baseURL: "https://api.webhub.uz/api/v1",
});

export default api;
