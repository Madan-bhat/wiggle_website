import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import reducers from "../reducers/reducers";

export const store = configureStore({
  reducer: reducers,
});

setupListeners(store.dispatch);
