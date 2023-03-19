import { combineReducers } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";
import videoSlice from "./videoSlice";

const rootReducer = combineReducers({
  mode: modeSlice,
  videos: videoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
