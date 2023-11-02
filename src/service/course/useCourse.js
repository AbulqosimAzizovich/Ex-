import api from "../axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const useCourse = {
  getCourse: () => api.get("/course", { headers }),
};

export default useCourse;
