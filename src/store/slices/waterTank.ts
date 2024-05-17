import { createSlice } from "@reduxjs/toolkit";

const waterTankSlice = createSlice({
  name: "waterTank",
  initialState: {
    data: {},
  },
  reducers: {
    setWaterTank: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setWaterTank } = waterTankSlice.actions;
export default waterTankSlice.reducer;
