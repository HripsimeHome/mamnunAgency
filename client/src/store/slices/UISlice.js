import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tooltipTxt: "",
  tooltipshowing: false,
  tooltipUpdateCount: 0,
};

export const UISlice = createSlice({
  name: "uISlice",
  initialState,
  reducers: {
    openTooltip(state, { payload }) {
      state.tooltipTxt = payload;
      state.tooltipshowing = true;
      state.tooltipUpdateCount = state.tooltipUpdateCount + 1;
    },
    closeTooltip(state) {
      state.tooltipshowing = false;
      state.tooltipUpdateCount = 0;
    },
  },
});

export const { openTooltip, closeTooltip } = UISlice.actions;

export default UISlice.reducer;
