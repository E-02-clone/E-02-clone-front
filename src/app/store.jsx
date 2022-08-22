import { configureStore } from "@reduxjs/toolkit";
import mainSlice from './slice/mainSlice';
import userSlice from './slice/userSlice';
import ItemSlice from "./slice/ItemSlice";
import writeSlice from "./slice/writeSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        main: mainSlice.reducer,
        ItemSlice,
        writeSlice,
    },
});
