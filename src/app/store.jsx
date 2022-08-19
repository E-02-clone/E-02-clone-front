import { configureStore } from "@reduxjs/toolkit";
import ItemPostSlice from "./slice/ItemPostSlice";

export const store = configureStore({
  reducer: { ItemPostSlice },
});
