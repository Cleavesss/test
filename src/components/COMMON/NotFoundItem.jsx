import React from "react";

export default function NotFoundItem(){
    return (
        <div className="bg-blue-400 dark:bg-blue-700 mb-5 flex flex-col justify-center items-center text-bold newBordered h-[80px] ">

                <p className="text-xl text-red-800 dark:text-green-600">Того, что Вы пытаетесь найти не существует в этих данных</p>
                <p className="text-lg text-red-800 dark:text-green-600">Попробуйте ввести запрос по-другому</p>
        </div>    
    ) 
}