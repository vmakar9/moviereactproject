import {FC, PropsWithChildren} from "react";
import {IMovieDetails} from "@/interfaces/movieDetails.interface";
import {urls} from "@/urls/urls";
import MovieCompanies from "@/app/(main-layout)/movies/[id]/details/components/MovieDetailArrays/MovieCompanies/MovieCompanies";
import MovieCountries from "@/app/(main-layout)/movies/[id]/details/components/MovieDetailArrays/MovieCountries/MovieCountries";
import MovieGenres from "@/app/(main-layout)/movies/[id]/details/components/MovieDetailArrays/MovieGenres/MovieGenres";
import css from "./ModuleDetail.module.css"
interface IProps extends PropsWithChildren{
    movieDetails:IMovieDetails
}

const MovieDetail:FC<IProps>=({movieDetails})=>{
    const {title,original_title,original_language,vote_average,
        poster_path,release_date,spoken_languages,belongs_to_collection,budget,
          genres,adult,homepage,backdrop_path,imdb_id,id,production_companies,popularity,
    production_countries,revenue,runtime,status,tagline,video,vote_count,overview} = movieDetails



    return(<div className={css.MovieContainer}>
       <div className={css.MovieBlock}>
           <h3 className={css.MovieTitle}>{title}</h3>
           <h3 className={css.MovieOrigTitle}>{original_title}</h3>
           <img className={css.MoviePoster} src={`${urls.photoURL}/${poster_path}`} alt={`poster ${title}`}/>
           <h3 className={css.MovieTagline}>{tagline}</h3>
           <h5 className={css.MovieRelase}>{release_date}</h5>
           <div className={css.MovieGenres}>
           {genres.map(genre=><MovieGenres key={genre.id} genre={genre}/>)}
           </div>

           <p className={css.MovieOverview}>{overview}</p>
           <p className={css.MovieOrigLang}>Original Language : {original_language}</p>
           <p className={css.MovieAdult}>Adult : {adult}</p>
           <a className={css.MovieHomePage} href={homepage}>Home Page</a>
           <p className={css.MovieBudget}>Budget : {budget}</p>
           <p className={css.MovieRevenue}>Revenue : {revenue}</p>
           <p className={css.MovieRuntime}>Runtime : {runtime}</p>
           <p className={css.MovieStatus}>Status : {status}</p>

           <p className={css.MovieVoteCount}>Vote Count : {vote_count}</p>
           <p className={css.MovieVoteAverage}>Vote Average : {vote_average}</p>
           <p className={css.MoviePopularity}>Popularity : {popularity}</p>
           <div className={css.blackline}></div>
           <h3>Spoken Languages: </h3>
           <div className={css.MovieSpokenLanguages}>
               {spoken_languages.map(languages=><h3>{languages.name}</h3>)}
           </div>
           <div className={css.blackline}></div>
           <h3>Production Companies: </h3>
           <div>
               {production_companies.map(companies=><MovieCompanies key={companies.id} companies={companies}/>)}
           </div>
           <div className={css.blackline}></div>
           <h3>Production Countries: </h3>
           <div>
               {production_countries.map(countries=><MovieCountries key={countries.iso_3166_1} countries={countries}/>)}
           </div>

       </div>
    </div>)
}

export default MovieDetail