import {IRes} from "@/types/res.type";
import {IPagination} from "@/interfaces/pagination.interface";
import {IMovie} from "@/interfaces/movie.interface";
import {apiService} from "@/services/api.service";
import {urls} from "@/urls/urls";

const movieService={
    getAll:():IRes<IPagination<IMovie>> => apiService.get(urls.movie)
}

export {movieService}