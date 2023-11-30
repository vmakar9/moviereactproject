import {IGenre, IGenreList} from "@/interfaces/genre.interface";
import {IRes} from "@/types/res.type";
import {apiService} from "@/services/api.service";
import {urls} from "@/urls/urls";

const genreService={
    getAll:():IRes<IGenreList<IGenre>> => apiService.get(urls.genre)
}

export {genreService}