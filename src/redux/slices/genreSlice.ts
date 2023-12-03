import {IGenre, IGenreList} from "@/interfaces/genre.interface";
import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {genreService} from "@/services/genre.service";

interface IState{
    genres:IGenre[],
    isLoading:boolean
}

const initialState:IState={
    genres:[],
    isLoading:null
}

const getAll = createAsyncThunk<IGenreList<IGenre>,void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await genreService.getAll()
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const genreSlice = createSlice({
     name:'genreSlice',
     initialState,
     reducers:{},
    extraReducers:builder => builder
        .addCase(getAll.fulfilled,(state, action) => {
            state.genres = action.payload.genres
        })
        .addMatcher(isFulfilled(getAll),state => {
            state.isLoading = false
        })
        .addMatcher(isRejected(getAll),(state, action) => {
            state.isLoading = false
        })
        .addMatcher(isPending(getAll),state=>{
            state.isLoading = true
        })
    }
)

const {reducer:genreReducer,actions} = genreSlice

const genreActions={
    ...actions,
    getAll
}

export {genreActions,genreReducer}