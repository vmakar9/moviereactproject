import {IMovie} from "@/interfaces/movie.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "@/services/movie.service";

interface IState{
    movies:IMovie[]
}

const initialState:IState={
    movies:[]
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getAll()
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:builder => builder
        .addCase(getAll.fulfilled,(state, action) => {
            state.movies = action.payload.results
        })
})

const {reducer:movieReducer,actions} =movieSlice

const movieActions={
    ...actions,
    getAll
}

export {
    movieActions,movieReducer
}