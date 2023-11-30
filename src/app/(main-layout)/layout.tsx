import {FC, PropsWithChildren} from "react";
import {Providers} from "@/redux/Providers";
import Header from "@/app/(main-layout)/components/Header/Header";

const Layout:FC<PropsWithChildren>=({children})=>{
     return(<div>
         <Header/>
         <Providers>{children}</Providers>
     </div>)
}

export default Layout