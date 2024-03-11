import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import dates from "../redux/dates";
import storage from "redux-persist/lib/storage";

const combinedReducer = combineReducers({
  dates,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dates"],
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
