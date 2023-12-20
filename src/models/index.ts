export type TFetchWeatherRequest = {
  lat: number;
  lon: number;
};

export type TFetchCityReuest = {
  city?: string;
  country?: string;
};

export interface ICityInfo {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
}

type TWeatherDetail = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type TWeatherMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

type TWeatherSys = {
  id: number;
  type: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export interface ICityWeather {
  coord: { lon: number; lat: number };
  dt: number;
  name: string;
  weather: Array<TWeatherDetail>;
  main: TWeatherMain;
  sys: TWeatherSys;
}

export type TFetchCityResponse = Array<ICityInfo>;
export type TFetchWeatherResponse = ICityWeather;
