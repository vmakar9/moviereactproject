import {FC, PropsWithChildren} from "react";
import MoviesByGenre from "@/app/(main-layout)/genres/[id]/movies/components/MoviesByGenre/MoviesByGenre";

interface IProps extends PropsWithChildren{
    params:{id:string}
}

const Page:FC<IProps>=({params:{id}})=>{
    return(<div>
       <MoviesByGenre with_genres={id}/>
    </div>)
}

export default Page