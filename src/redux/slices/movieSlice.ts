import {IMovie} from "@/interfaces/movie.interface";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {movieService} from "@/services/movie.service";
import {IPagination} from "@/interfaces/pagination.interface";
import {IMovieDetails} from "@/interfaces/movieDetails.interface";
import {AxiosError} from "axios";



interface IState{
    movies:IMovie[],
    movieDetails:IMovieDetails,
    movieByGenre:IMovie[],
    isLoading:boolean,
}

const initialState:IState={
    movies:[],
    movieDetails:null,
    movieByGenre:[],
    isLoading:null,
}

const getAll = createAsyncThunk<IPagination<IMovie>,void>(
    'movieSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getAll()
            return data
        }catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
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
         const error = e as AxiosError
         return rejectWithValue(error.response?.data)
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
            const error = e as AxiosError
            return rejectWithValue(error.response?.data)
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
        .addMatcher(isFulfilled(getAll,details,movieByGenre),state => {
            state.isLoading = false
        })
        .addMatcher(isRejected(getAll,details,movieByGenre),(state, action) => {
            state.isLoading = false
        })
        .addMatcher(isPending(getAll,details,movieByGenre),state=>{
            state.isLoading = true
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