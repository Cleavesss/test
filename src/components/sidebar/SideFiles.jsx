import React  from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SideFiles(){

    let someFiles = [];
    let currentUser = useSelector(state => state.current.currentUser)
   
    someFiles = useSelector(state => state.files.files);
    someFiles = someFiles.filter(file => {
        return file.from.email === currentUser.email
    });


    let lastIndex = someFiles.length
    if(lastIndex > 5){lastIndex=5}
    let listFiles = someFiles.slice(0, lastIndex);

 

    let content = listFiles.map( file => {
    
        let currentStatus = (file.status === 'none') ? '?' : '✓'
    
        return (
       <div className="bg-blue-300 flex items-center dark:bg-blue-600 rounded mb-1 w-full h-[35px] " key={file.id}>
           <p>{currentStatus}</p>
           <p className="text-xs ml-2 2xl:ml-5 overflow-hidden">{file.name}</p>
       </div>
    )})
    
        

    


    content = (content.length > 0) ? content : <p className="mb-5">Вы не предоставили ни одного файла на проверку</p>
    
    return(
        <div className="w-full flex flex-col items-center   min-h-[300px] text-white bg-blue-400 py-2 px-1 dark:bg-blue-700 newBordered">
                <p className="mb-5 w-full border-b-4 pb-2">Файлы</p> 
                {content}
                <Link to="/files">Показать</Link>  
                <Link to="/upload">Загрузить</Link>
        </div>
    )
}