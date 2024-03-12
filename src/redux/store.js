import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dayDisable from "./reducer/dayDisableList";
import tripeDays from "../redux/reducer/tripeDays";

const combinedReducer = combineReducers({
  dayDisable,
  tripeDays,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dayDisable", "tripeDays"],
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
