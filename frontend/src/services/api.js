import axios from "axios";

const API = axios.create({
  baseURL: "https://foodie-URL.onrender.com"
});

export default API;