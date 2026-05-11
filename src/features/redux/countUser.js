import { createSlice } from "@reduxjs/toolkit";

const countstudents = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    setCount: (state, action) => {
      return action.payload;
    },
  },
});
export const { setCount } = countstudents.actions;

export default countstudents.reducer;
