import { combineReducers } from "@reduxjs/toolkit";
import activeVideoSlice from "./activeVideoSlice";
import modeSlice from "./modeSlice";
import userSlice from "./userSlice";
import videoSlice from "./videoSlice";

const rootReducer = combineReducers({
  mode: modeSlice,
  videos: videoSlice,
  user: userSlice,
  activeVideo: activeVideoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
