import {FC, PropsWithChildren} from "react";
import MovieDetails from "@/app/(main-layout)/movies/[id]/details/components/MovieDetails/MovieDetails";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movie Details'
}

interface IProps extends PropsWithChildren{
    params:{id:string}
}
const Page:FC<IProps>= async ({params:{id}})=>{

     return(<div>
         <MovieDetails id={id}/>
     </div>)

}

export default Page