"use client"
import {FC, PropsWithChildren, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHook";
import {movieActions} from "@/redux/slices/movieSlice";
import MovieByGenre from "@/app/(main-layout)/genres/[id]/movies/components/MovieByGenre/MovieByGenre";

interface IProps extends PropsWithChildren{
    with_genres:string
}

const MoviesByGenre:FC<IProps>= ({with_genres})=>{

    const {movieByGenre,isLoading} =useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    useEffect( () => {
         dispatch(movieActions.movieByGenre({with_genres}))
    }, [dispatch,with_genres]);


    return(<div>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && movieByGenre.map(moviesByGenre=><MovieByGenre key={moviesByGenre.id} moviesByGenre={moviesByGenre}/>)}
    </div>)
}

export default MoviesByGenre