import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import dayDisable from "../redux/dayDisableList";
import storage from "redux-persist/lib/storage";

const combinedReducer = combineReducers({
  dayDisable,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dayDisable"],
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
