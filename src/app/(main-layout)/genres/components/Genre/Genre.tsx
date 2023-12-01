import {FC, PropsWithChildren} from "react";
import {IGenre} from "@/interfaces/genre.interface";
import css from "./Genre.module.css"

import Link from "next/link";

interface IProps extends PropsWithChildren{
    genre:IGenre
}

const Genre:FC<IProps> =({genre})=>{

    const {id,name} = genre

    return(<div className={css.GenreBlock}>
        <Link className={css.GenreLink} href={`/genres/${id}/movies`}><div className={css.GenreName}>
             <h4>{name}</h4>
        </div> </Link>
    </div>)
}

export default Genre