import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModeState {
  mode: string;
}

const initialState: ModeState = {
  mode: "light",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
