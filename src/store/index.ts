import { configureStore } from "@reduxjs/toolkit";
import waterTank from "./slices/waterTank";
import waterTanks from "./slices/waterTanks";

export default configureStore({
  reducer: {
    waterTank,
    waterTanks,
  },
});
