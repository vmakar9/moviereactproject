import {FC, PropsWithChildren} from "react";
import {IProductionCountry} from "@/interfaces/movieDetails.interface";

interface IProps extends PropsWithChildren{
    countries:IProductionCountry
}
const MovieCountries:FC<IProps>=({countries})=>{
    const {name} = countries
    return(<div>
        <div>

            <h4>{name}</h4>
        </div>
    </div>)
}

export default MovieCountries