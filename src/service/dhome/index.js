import api from "../axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const useDhome = {
  getDhome: () => api.get("/summary", { headers }),
};

export default useDhome;
