import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "components/COMMON/Loading.jsx";

export default function SidePersons(){


    let [lastIndex, setLastIndex] = useState(5);
    let somePersons = useSelector(state => state.persons.persons);
    let listPersons = somePersons.slice(0, lastIndex);

    if(lastIndex > somePersons.length){
        setLastIndex(somePersons.length-1)
    }

    
    function handleClick(){
        setLastIndex((prev) => prev +=5)
    }

    let content = listPersons.map(person => (
        <div className="bg-blue-300 flex items-center dark:bg-blue-600 rounded mb-1 w-full h-[35px]" key={person.registered}>
            <img src={person.picture.thumbnail} className="newBordered border-2  w-8 ml-2 " alt="Аватарка"/>
            <p className="text-xs ml-2 2xl:ml-5 overflow-scroll">{person.email}</p>
        </div>
    ))
    

    if (somePersons.length < 5){
        content = <Loading x={1.5} />
    }

    return(
        <div className="w-full flex flex-col items-center  h-3/5 newBordered text-white bg-blue-400 py-2 px-1 dark:bg-blue-700 mb-5 overflow-scroll">
            <div className=" mb-5 w-full border-b-4 pb-2">Пользователи</div>
            {content}
            <p onClick={handleClick}>Показать</p>  
        </div>
    )
}