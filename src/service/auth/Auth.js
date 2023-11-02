import api from "./../axios";

const user = {
  login: (data) => api.post("/admin/login", data),
};

export default user;
