import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  TFetchCityResponse,
  TFetchCityReuest,
  TFetchWeatherRequest,
  TFetchWeatherResponse,
} from "../models";

type TWeatherState = {
  isFetching: boolean;
  isNoCity: boolean;
  cityInfo?: TFetchWeatherResponse;
  fetchedCities: TFetchCityResponse;
};

const initialState: TWeatherState = {
  isFetching: false,
  isNoCity: false,
  fetchedCities: [],
};

export const fetchCityRequest = createAction<TFetchCityReuest>(
  "WEATHER/CITY/REQUEST"
);

export const fetchCitySuccess = createAction<TFetchCityResponse>(
  "WEATHER/CITY/SUCCESS"
);

export const fetchCityFailure = createAction<unknown>("WEATHER/CITY/FAILURE");

export const removeCity = createAction<string>("WEATHER/CITY/REMOVE");

export const fetchWeatherRequest = createAction<TFetchWeatherRequest>(
  "WEATHER/FETCH_WEATHER/REQUEST"
);

export const fetchWeatherSuccess = createAction<TFetchWeatherResponse>(
  "WEATHER/FETCH_WEATHER/SUCCESS"
);

export const fetchWeatherFailure = createAction<unknown>(
  "WEATHER/FETCH_WEATHER/FAILURE"
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  /**
   * Leaving this reducer object as EMPTY due to using customize
   * action creator which need to be handle by Extra Reducer
   * */
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityRequest, (state) => {
        state.isFetching = true;
        state.isNoCity = false;
      })
      .addCase(
        fetchCitySuccess,
        (state, action: PayloadAction<TFetchCityResponse>) => {
          state.isFetching = false;
          state.fetchedCities.push(action.payload[0]);
        }
      )
      .addCase(fetchCityFailure, (state) => {
        state.isFetching = false;
        state.isNoCity = true;
      })
      .addCase(removeCity, (state, action: PayloadAction<string>) => {
        const cityName = action.payload;
        state.fetchedCities = state.fetchedCities.filter(
          (city) => city.name !== cityName
        );
      });

    builder
      .addCase(fetchWeatherRequest, (state) => {
        state.isFetching = true;
        state.isNoCity = false;
      })
      .addCase(fetchWeatherSuccess, (state, action) => {
        state.isFetching = false;
        state.cityInfo = action.payload;
      })
      .addCase(fetchWeatherFailure, (state) => {
        state.isFetching = false;
        state.isNoCity = true;
      });
  },
});

export default weatherSlice;
