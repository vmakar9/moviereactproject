"use client"
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHook";
import {useEffect} from "react";
import {movieActions} from "@/redux/slices/movieSlice";
import Movie from "@/app/(main-layout)/movies/components/Movie/Movie";

const Movies=()=>{
    const {movies,isLoading} = useAppSelector(state => state.movies)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch]);



    return(<div>
        {isLoading && <h1>Loading...</h1>}
        {movies.map(movie=><Movie movie={movie} key={movie.id}/>)}
    </div>)
}


export default Movies