import {IRes} from "@/types/res.type";
import {IPagination} from "@/interfaces/pagination.interface";
import {IMovie} from "@/interfaces/movie.interface";
import {apiService} from "@/services/api.service";
import {urls} from "@/urls/urls";
import {IMovieDetails} from "@/interfaces/movieDetails.interface";

const movieService={
    getAll:():IRes<IPagination<IMovie>> => apiService.get(urls.movie),
    details:(id:number | string):IRes<IMovieDetails> => apiService.get(urls.details.byId(id))
}

export {movieService}