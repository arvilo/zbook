import { configureStore } from "@reduxjs/toolkit";
import universityReducer from './universitySlice.js';

export const store = configureStore({
    reducer: {
       university: universityReducer
    },
})