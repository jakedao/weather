import { useDispatch, useSelector } from "react-redux";

import { TFetchCityReuest } from "../models";
import { fetchCityRequest, removeCity } from "../slices/weatherSlice";
import { RootState } from "../store";

const useWeather = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.weather);
  const weatherInfo = useSelector((state: RootState) => state.weather.cityInfo);
  const isFetchingWeather = useSelector(
    (state: RootState) => state.weather.isFetching
  );
  const searchHistory = useSelector(
    (state: RootState) => state.weather.fetchedCities
  );

  const isNoCityFound = useSelector(
    (state: RootState) => state.weather.isNoCity
  );

  const handleFetchCity = (params: TFetchCityReuest) => {
    /**
     * CHECKING FETCHED CITY
     * City already fetched will be replaced by the latest city search
     * **/
    const isCityFetched = searchHistory.some(
      (city) => city.name === params.city
    );

    if (isCityFetched && params.city) {
      dispatch(removeCity(params.city));
    }

    dispatch(fetchCityRequest(params));
  };

  const handleRemoveCity = (cityName: string) => {
    dispatch(removeCity(cityName));
  };

  return {
    weather,
    weatherInfo,
    isFetchingWeather,
    isNoCityFound,
    searchHistory,
    handleFetchCity,
    handleRemoveCity,
  };
};

export default useWeather;
