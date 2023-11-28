import {FC, PropsWithChildren} from "react";
import {Providers} from "@/redux/Providers";

const Layout:FC<PropsWithChildren>=({children})=>{
     return(<div>
         <Providers>{children}</Providers>
     </div>)
}

export default Layout