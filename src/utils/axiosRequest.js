import axios from "axios";

export const axiosLogin = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

