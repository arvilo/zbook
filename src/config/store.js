import { configureStore } from "@reduxjs/toolkit";
import universityReducer from './universitySlice.js'; //butun reducerleri import edirik

export const store = configureStore({
    reducer: {
       university: universityReducer //butun reducerleri burda qeyd edirik adi ile birlikde
    },
})