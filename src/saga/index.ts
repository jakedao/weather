import { all } from "redux-saga/effects";

import weatherSaga from "./weatherSaga";

export function* rootSaga() {
  yield all([weatherSaga()]);
}
