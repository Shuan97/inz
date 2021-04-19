import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3200/api/v1",
  withCredentials: true,
});
