import { configureStore } from "@reduxjs/toolkit";
import searchProductReducer from "./inventory/slices/searchProducSlice";

export const store = configureStore(
  {
    reducer: {
      searchProduct: searchProductReducer,
    },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
