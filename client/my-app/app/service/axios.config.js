import axios from "axios";
axios.defaults.baseURL = "http://localhost:3500";
axios.defaults.headers.post["Authorization"] =
  "Bearer 686f098dca2dd5ec4478db7c73a494df76b692b6784d16d5b7118a2af27eef72";
axios.defaults.headers.post["Content-Type"] = "application/json";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default http;
