import { TFetchCityReuest, TFetchWeatherRequest } from "../models";
import instance from "../utils/apiHelper";

const GEO_API = "/geo/1.0/direct";
const WEATHER_API = "/data/2.5/weather";

export const getWeatherByLongLat = async (request: TFetchWeatherRequest) => {
  const { lat, lon } = request;
  return instance.get(`${WEATHER_API}?lat=${lat}&lon=${lon}`);
};

export const getLongLatByCity = async (request: TFetchCityReuest) => {
  const { city = "", country = "" } = request;
  return instance.get(`${GEO_API}?q=${city},${country}&limit=5`);
};
