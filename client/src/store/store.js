import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UIReducer from "./slices/UISlice";
import UserReducer from "./slices/userSlice";
import newsReducer from "./slices/newsSlice";

const rootReducer = combineReducers({
  user: UserReducer,
  ui: UIReducer,
  news: newsReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
