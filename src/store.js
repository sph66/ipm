import { configureStore } from "@reduxjs/toolkit";
import searchProductReducer from "./inventory/slices/searchProducSlice";
import editableDebtReducer from "./debt/slices/debtSlice";

export const store = configureStore(
  {
    reducer: {
      searchProduct: searchProductReducer,
      editableDebt: editableDebtReducer,
    },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
