import { combineReducers } from "@reduxjs/toolkit";
import activeUserSlice from "./activeUser";
import activeVideoSlice from "./activeVideoSlice";
import modeSlice from "./modeSlice";
import userSlice from "./userSlice";
import videoSlice from "./videoSlice";
import channelSlice from "./channelDetails";

const rootReducer = combineReducers({
  mode: modeSlice,
  videos: videoSlice,
  user: userSlice,
  activeVideo: activeVideoSlice,
  activeUser: activeUserSlice,
  channel: channelSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
