import { combineReducers } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";

const rootReducer = combineReducers({
  mode: modeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer