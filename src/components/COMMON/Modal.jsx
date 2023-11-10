import React from "react";

export default function Modal({children}){
    return(
        <div className="h-screen w-screen overflow-hidden flex justify-center items-center relative bg-black opacity-70">
            <div className=" opacity-100 newBordered bg-blue-500 dark:bg-blue-800 h-[500px] w-[500px] flex flex-col justify-center items-center">
                {children}
            </div>
        </div>    
    )
}