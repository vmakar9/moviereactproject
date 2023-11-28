import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "@/redux/slices/movieSlice";

const store = configureStore({
    reducer:{
       movies:movieReducer
    }
})

export {store}