import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PURGE,
  PAUSE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./Reducers/UserReducer";

const persistConfig = {
  key: "AppData",
  storage,
};

const reducers = combineReducers({ user: userReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
