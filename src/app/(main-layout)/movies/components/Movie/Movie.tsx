"use client"
import {FC, PropsWithChildren, useEffect} from "react";
import {IMovie} from "@/interfaces/movie.interface";
import {urls} from "@/urls/urls";
import css from "./Movie.module.css"
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHook";
import {genreActions} from "@/redux/slices/genreSlice";
import {useNavigate} from "react-router";
import Link from "next/link";

interface IProps extends PropsWithChildren{
    movie:IMovie
}

const Movie:FC<IProps> =({movie})=>{
    const {id,poster_path,title,vote_average,genre_ids,release_date}= movie

    const {genres} = useAppSelector(state => state.genres)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);



    const genreMovie = genres.filter(genre=>genre_ids.includes(genre.id))
    genreMovie.length=2



    return(<div className={css.MovieList}>

       <div className={css.MovieCard}>
           <Link  className={css.MovieLink} href={`movies/${id}/details`}>
           <img className={css.MovieImage} src={`${urls.photoURL}/${poster_path}`} alt={`${title} poster`}/>

            <h4 className={css.MovieTitle}>{title}</h4>
            <div className={css.MovieGenres}>
                {genreMovie.map((genre)=>(<p key={genre.id}>{genre.name}</p>))}
            </div>
            <h5 className={css.Release}>Release:{release_date}</h5>
           </Link>
        </div>
    </div>)
}

export default Movie