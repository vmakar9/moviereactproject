import {FC, PropsWithChildren} from "react";
import {IMovie} from "@/interfaces/movie.interface";
import {urls} from "@/urls/urls";
import css from "./Movie.module.css"

interface IProps extends PropsWithChildren{
    movie:IMovie
}

const Movie:FC<IProps> =({movie})=>{
    const {id,poster_path,title,vote_average,genre_ids,release_date}= movie

    return(<div className={css.MovieList}>

        <div className={css.MovieCard}>
            <img className={css.MovieImage} src={`${urls.photoURL}/${poster_path}`} alt={`${title} poster`}/>

            <h4 className={css.MovieTitle}>{title}</h4>

            <h5 className={css.Release}>Release:{release_date}</h5>
        </div>
    </div>)
}

export default Movie