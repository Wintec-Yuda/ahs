import { configureStore } from "@reduxjs/toolkit";
import waterTank from "./slices/waterTank";

export default configureStore({
  reducer: {
    waterTank,
  },
});
