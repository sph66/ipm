import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

export const editableDebtSlice = createSlice({
  name: "editableDebt",
  initialState,
  reducers: {
    setEditableDebt: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setEditableDebt } = editableDebtSlice.actions;

export default editableDebtSlice.reducer;
