import React  from "react";
import SidePersons from "./SidePersons";
import SideFiles from "./SideFiles";

export default function SideBar(){
    return(
        <div className="newBordered bg-blue-500 dark:bg-blue-800 mx-5 my-5 px-1 py-2 h-[500px]  sticky top-28 text-center text-lg">
            <SidePersons />
            <SideFiles />
              
        </div>
    )
}