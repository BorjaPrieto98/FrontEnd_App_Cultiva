import axios from "axios";

const api = axios.create({
  baseURL: "http://app-cultiva.local/public", // URL base del backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
