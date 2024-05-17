import { createSlice } from "@reduxjs/toolkit";

const waterTanksSlice = createSlice({
  name: "waterTank",
  initialState: {
    data: {},
  },
  reducers: {
    setWaterTanks: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setWaterTanks } = waterTanksSlice.actions;
export default waterTanksSlice.reducer;
