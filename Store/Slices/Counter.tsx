import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface counter {
  value: Number;
}
const initialState: counter = {
  //   value:
  //     typeof window !== "undefined" && localStorage.getItem("items")
  //       ? Number(localStorage.getItem("items"))
  //       : 0,
  value: localStorage.getItem("count")
    ? Number(localStorage.getItem("count"))
    : 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: Record<string, any>) => {
      console.log("typeof state: ", state);
      state.value = state.value + 1;
    },
    decrement: (state: Record<string, any>) => {
      state.value = state.value + 1;
    },
    incrementByAmount: (
      state: Record<string, any>,
      action: PayloadAction<number>
    ) => {
      state.value += action.payload;
    },
    decrementByAmount: (
      state: Record<string, any>,
      action: PayloadAction<number>
    ) => {
      state.value -= action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  CounterSlice.actions;
export default CounterSlice.reducer;
