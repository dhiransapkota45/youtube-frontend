import { combineReducers } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";
import userSlice from "./userSlice";
import videoSlice from "./videoSlice";

const rootReducer = combineReducers({
  mode: modeSlice,
  videos: videoSlice,
  user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
