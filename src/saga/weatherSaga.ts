import { PayloadAction } from "@reduxjs/toolkit";
import { SagaIterator } from "redux-saga";
import { all, call, put, takeEvery } from "redux-saga/effects";

import { getLongLatByCity, getWeatherByLongLat } from "../api";
import {
  TFetchCityResponse,
  TFetchCityReuest,
  TFetchWeatherResponse,
} from "../models";
import {
  fetchCityFailure,
  fetchCityRequest,
  fetchCitySuccess,
  fetchWeatherSuccess,
} from "../slices/weatherSlice";

function* handleFetchCity$(
  action: PayloadAction<TFetchCityReuest>
): SagaIterator {
  try {
    const res: TFetchCityResponse = yield call(getLongLatByCity, {
      ...action.payload,
    });
    const foundCity = res[0];

    if (!foundCity) {
      throw new Error("No city found");
    }
    yield put(fetchCitySuccess(res));
    const response: TFetchWeatherResponse = yield call(getWeatherByLongLat, {
      lat: foundCity.lat,
      lon: foundCity.lon,
    });
    yield put(fetchWeatherSuccess(response));
  } catch (e) {
    yield put(fetchCityFailure(e));
  }
}

function* weatherSaga() {
  yield all([takeEvery(fetchCityRequest, handleFetchCity$)]);
}

export default weatherSaga;
