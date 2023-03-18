import { createSlice } from "@reduxjs/toolkit";

interface ModeState {
  mode: boolean;
  sidebarCollapsed: boolean;
}

const initialState: ModeState = {
  mode: false, 
  sidebarCollapsed: false,
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = !state.mode;
    },
    setSideCollapsed: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});

export const { setMode, setSideCollapsed } = modeSlice.actions;

export default modeSlice.reducer;

// action: PayloadAction<string>
