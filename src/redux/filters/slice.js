import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    itemSearched: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.itemSearched = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export const filtersReducer = slice.reducer;
