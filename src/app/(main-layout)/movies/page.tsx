import Movies from "./components/Movies/Movies"
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movies'
}


const Page =  ()=>{
    return(<div>
         <Movies/>
    </div>)
}


export default Page