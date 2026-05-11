import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./features/redux/countUser";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
