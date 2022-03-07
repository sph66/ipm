import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    search: (state, action) => {
      console.log(state, action);
      state.value = action.payload;
    },
  },
});

export const { search } = searchProductSlice.actions;

export default searchProductSlice.reducer;
