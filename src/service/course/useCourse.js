import api from "../axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const useCourse = {
  getCourse: () => api.get("/course", { headers }),
  createCourse: (data) => api.post("/course", data, { headers }),
};

export default useCourse;
