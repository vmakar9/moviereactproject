"use client"
import {FC, PropsWithChildren, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHook";
import {movieActions} from "@/redux/slices/movieSlice";
import MovieDetail from "@/app/(main-layout)/movies/[id]/details/components/MovieDetail/MovieDetail";


interface IProps extends PropsWithChildren{
    id:string
}
const MovieDetails:FC<IProps>=({id})=>{
    const {movieDetails,isLoading} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.details({id}))
    }, [dispatch]);

    return(<div>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && movieDetails && <MovieDetail movieDetails={movieDetails}/>}
    </div>)
}

export default MovieDetails