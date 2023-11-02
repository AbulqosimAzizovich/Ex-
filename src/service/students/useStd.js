import api from "../axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const useStd = {
  createStudent: (data) => api.post("/user/register", data, { headers }),
  getStudent: () => api.get("/student/get-all", { headers }),
  getOneStudent: (id) => api.get(`/student/${id}`),
};

export default useStd;
