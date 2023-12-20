import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/";

const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.request.use(
  (config) => {
    // Passing API KEY as default query
    config.params = { ...config.params, appid: process.env.WEATHER_API_KEY };
    return config;
  },
  (err) => {
    // Error from Request will be handled here
    console.log("handle error", err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    // Error from Response will be handled here
    return Promise.reject(err);
  }
);

export default instance;
