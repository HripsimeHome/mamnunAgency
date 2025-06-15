import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UIReducer from "./slices/UISlice";
import UserReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  user: UserReducer,
  ui: UIReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
