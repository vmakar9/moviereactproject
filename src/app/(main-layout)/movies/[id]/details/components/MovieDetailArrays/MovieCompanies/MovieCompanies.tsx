import {FC, PropsWithChildren} from "react";
import {IProductionCompany} from "@/interfaces/movieDetails.interface";
import {urls} from "@/urls/urls";

interface IProps extends PropsWithChildren{
    companies:IProductionCompany
}

const MovieCompanies:FC<IProps>=({companies})=>{

    const {name,origin_country,logo_path} = companies

    return(<div>
        <div >
            <h3>{name}</h3>
            <img alt={`${name} logo`} src={`${urls.photoURL}/${logo_path}`}/>
            <h3>{origin_country}</h3>
        </div>
    </div>)
}

export default MovieCompanies