
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import sessionStorage from 'redux-persist/es/storage/session';
  import { PersistGate } from 'redux-persist/integration/react'
const persistConfig = {
  key: "root",
  version: 1,
  storage:sessionStorage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store= configureStore({
    reducer:{
        cart:persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store);