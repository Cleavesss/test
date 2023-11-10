import React from "react";

export default function Button({text,}){

 
    
    return (
        <div className=" dark:btn ">

            <span className="bg-blue-500 py-2 px-6 
            rounded-full 
            dark:bg-inherit 
            hover:bg-blue-800">
            
                {text}
            </span>    

        </div>
    )
}