import { combineReducers } from "redux";

import weatherSlice from "./weatherSlice";

const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
});

export default rootReducer;
