"use client"
import React, {FC, PropsWithChildren} from "react";
import {Provider} from "react-redux";
import  {store} from "@/redux/store";


const Providers:FC<PropsWithChildren> =({children})=>{

    return(
        <Provider store={store}>
            {children}
        </Provider> )
}


export {Providers}