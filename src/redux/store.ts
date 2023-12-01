import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "@/redux/slices/movieSlice";
import {genreReducer} from "@/redux/slices/genreSlice";


const store = configureStore({
    reducer:{
       movies:movieReducer,
       genres:genreReducer
    }
})

export {store}