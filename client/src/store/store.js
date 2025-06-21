import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UIReducer from "./slices/UISlice";
import UserReducer from "./slices/userSlice";
import newsReducer from "./slices/newsSlice";
import certificatesReducer from "./slices/certificatesSlice";
import contactsReducer from "./slices/constactsSlice";

const rootReducer = combineReducers({
  user: UserReducer,
  ui: UIReducer,
  news: newsReducer,
  certificates: certificatesReducer,
  contacts: contactsReducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
