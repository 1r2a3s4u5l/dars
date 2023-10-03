import axios from "axios";

const http = axios.create({
  baseURL: "https://todonew-production.up.railway.app/api",
});

http.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // config.headers["Language"] = localStorage.getItem("lang");
    config.headers["Accept"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
