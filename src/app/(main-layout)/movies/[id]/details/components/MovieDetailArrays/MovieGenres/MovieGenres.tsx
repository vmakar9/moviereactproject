import {FC, PropsWithChildren} from "react";
import {IGenre} from "@/interfaces/genre.interface";

interface IProps extends PropsWithChildren{
    genre:IGenre
}
const MovieGenres:FC<IProps>=({genre})=>{
    const {name} = genre

    return(<div>
        <div>
            <h4>{name}</h4>
        </div>
    </div>)
}

export default MovieGenres