import api from "../axios";

const postAPI = {
  login: async () => api.get("/admin/login"),
};

export default postAPI;
