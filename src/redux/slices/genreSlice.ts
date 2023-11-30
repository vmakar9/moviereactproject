import {IGenre, IGenreList} from "@/interfaces/genre.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "@/services/genre.service";

interface IState{
    genres:IGenre[]
}

const initialState:IState={
    genres:[]
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
    }
)

const {reducer:genreReducer,actions} = genreSlice

const genreActions={
    ...actions,
    getAll
}

export {genreActions,genreReducer}