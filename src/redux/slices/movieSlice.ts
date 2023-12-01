import {IMovie} from "@/interfaces/movie.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "@/services/movie.service";
import {IPagination} from "@/interfaces/pagination.interface";
import {IMovieDetails} from "@/interfaces/movieDetails.interface";

interface IState{
    movies:IMovie[],
    movieDetails:IMovieDetails,
    movieByGenre:IMovie[]
}

const initialState:IState={
    movies:[],
    movieDetails:null,
    movieByGenre:[]
}

const getAll = createAsyncThunk<IPagination<IMovie>,void>(
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

const details = createAsyncThunk<IMovieDetails,{id:string}>(
    'movieSlice/details',
    async ({id},{rejectWithValue})=>{
     try {
        const {data} = await movieService.details(id)
         return data
      }catch (e) {
         return  rejectWithValue(e)
     }
    }
)

const movieByGenre = createAsyncThunk<IPagination<IMovie>,{with_genres:number|string}>(
    'movieSlice/movieByGenre',
    async ({with_genres},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getByGenre(with_genres)
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
        .addCase(details.fulfilled,(state, action)=>{
            state.movieDetails = action.payload
        })
        .addCase(movieByGenre.fulfilled,(state, action)=>{
            state.movieByGenre = action.payload.results
        })

})

const {reducer:movieReducer,actions} =movieSlice

const movieActions={
    ...actions,
    getAll,
    details,
    movieByGenre
}

export {
    movieActions,movieReducer
}