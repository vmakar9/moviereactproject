import Genres from "@/app/(main-layout)/genres/components/Genres/Genres";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Genres'

}
const Page=()=>{
    return(<div>
        <Genres/>
    </div>)
}

export default Page