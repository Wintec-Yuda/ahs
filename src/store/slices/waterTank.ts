import { createSlice } from "@reduxjs/toolkit";

const athleteSlice = createSlice({
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

export const { setWaterTank } = athleteSlice.actions;
export default athleteSlice.reducer;
