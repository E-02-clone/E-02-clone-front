import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./slice/ItemPostSlice";

export const store = configureStore({
  reducer: { ItemSlice },
});
