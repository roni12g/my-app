import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count: 0
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = itemsSlice.actions;

export default itemsSlice.reducer;
