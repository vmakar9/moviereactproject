import {FC, PropsWithChildren} from "react";
import {IMovie} from "@/interfaces/movie.interface";
import css from "./MovieByGenre.module.css"
import {urls} from "@/urls/urls";
import Link from "next/link";
interface IProps extends PropsWithChildren{
    moviesByGenre:IMovie
}
const MovieByGenre:FC<IProps>=({moviesByGenre})=>{

    const {id,poster_path,title,release_date} = moviesByGenre


    return(<div className={css.MovieList}>
        <Link  className={css.MovieLink} href={`/movies/${id}/details`}>
        <div className={css.MovieCard}>
            <img className={css.MovieImage} src={`${urls.photoURL}/${poster_path}`} alt={`${title} poster`}/>

            <h4 className={css.MovieTitle}>{title}</h4>

            <h5>Release:{release_date}</h5>


        </div>
      </Link>
    </div>)
}

export default MovieByGenre