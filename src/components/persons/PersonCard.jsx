import React from "react";


export default function PersonCard({person}){
    
    function ucFirst(str){
        if (!str) return str;

        return str[0].toUpperCase() + str.slice(1);
    }

    let date = person.registered + '000'
    let dateRegistered = getNormalFormatDate(new Date(+date));
   
    function getNormalFormatDate(date){
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10){
            month = '0' + month
        }
        let day = date.getDate();
        if(day < 10){
            day = '0' + day
        }
        let resalt = `${day}.${month}.${year}`;
        return resalt ;
    }
    let contentName = `ФИО: ${person.name.title} ${ucFirst(person.name.first)} ${ucFirst(person.name.last)}`

    let gender = person.gender
   
    return (
        

        <div className="bg-blue-400 dark:bg-blue-700 mb-2 flex rounded-lg h-[50px] text-white font-table lg:text-lg">
            
            <img src={person.picture.medium} className="rounded mx-2 my-2 border  " alt="Аватарка"/>
            <div className="flex items-center  lg:basis-4/12 tracking-wider rounded-lg lg:mx-5 my-2  px-4 ">
                {contentName}
            </div>
            <div className="flex items-center  lg:basis-3/12 tracking-wider rounded-lg lg:mx-5 my-2  px-4  ">
                {`+${person.phone}`}
            </div>
            <div className="flex items-center hidden lg:block  lg:basis-2/12 tracking-wider rounded-lg lg:mx-5 my-2  px-4  ">
                {dateRegistered}
            </div>
            <div className="flex items-center hidden xl:block xl:basis-2/12 tracking-wider rounded-lg lg:mx-5 my-2  px-4  ">
                {gender}
            </div>
        </div>    
        
    )
}