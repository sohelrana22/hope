import { configureStore } from "@reduxjs/toolkit";
import { HopeWellSlice } from "./Slicer/HopeWellSlicer";

export const store = configureStore({
  reducer: {
    HopeWellData: HopeWellSlice,
  },
});
