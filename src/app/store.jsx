import { configureStore } from "@reduxjs/toolkit";
import mainSlice from './slice/mainSlice';
import userSlice from './slice/userSlice';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        main: mainSlice.reducer
    },
});
