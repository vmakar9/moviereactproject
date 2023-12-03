"use client"
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHook";
import {useEffect} from "react";
import {genreActions} from "@/redux/slices/genreSlice";
import Genre from "@/app/(main-layout)/genres/components/Genre/Genre";

const Genres=()=>{
    const {genres,isLoading} = useAppSelector(state => state.genres)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);


    return(<div>
        {isLoading && <h1>Loading...</h1>}
        {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
    </div>)
}

export default Genres