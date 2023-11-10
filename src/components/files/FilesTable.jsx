import React, {useState} from "react";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {ReactComponent as DeleteIcon} from 'images/deleteIcon.svg';
import {statusFiles} from 'asyncFunc/statusFiles.js'
import {setStatusFileAction, setIsStatusUpdatingAction, deleteFileAction} from 'store/reducers/filesReducer.js'
import MiniLoading from 'components/COMMON/MiniLoading.jsx'
import Pagination from "components/COMMON/Pagination.jsx";
import NotFoundItem from "components/COMMON/NotFoundItem.jsx";

export default  function FilesTable(){


    let files = useSelector(state => state.files.files);
    let isAutoUpdate = useSelector(state => state.files.isAutoUpdate)
    let currentKey = useSelector(state => state.current.currentToken)
    let dispatch = useDispatch();
    let searchValue = useSelector(state => state.files.searchValue)
    let [currentPage, setCurrentPage] = useState(1);
    let [filesPerPage] = useState(10);
    
    
    
    function handleClick(index){
        dispatch(deleteFileAction(index))

    }

    if(isAutoUpdate){
        let filesForUpdate = files.filter(file => file.isStatusUpdating === true)
       
        for (let i = 0; i < filesForUpdate.length; i++){
            setTimeout(() => {
               
                handleClickstatus(filesForUpdate[i].id)}
                , 30000*(i+1) )
        }
    }


    let filteredFiles = [];
    if (searchValue !== ''){
        
        filteredFiles = files.filter( file => { 
            return file.name.includes(searchValue) || file.id.includes(searchValue)
        })
        
    }
    

    async function handleClickstatus(id){
        dispatch(setIsStatusUpdatingAction(id, true))
        let isSecure = await statusFiles(id, currentKey)
        if(typeof isSecure !== 'boolean'){
            console.log('Произошла ошибка', isSecure)
            dispatch(setStatusFileAction(id, 'none'))
            dispatch(setIsStatusUpdatingAction(id, false))
            return
        }
        if(isSecure === true){
            dispatch(setStatusFileAction(id, 'Все хорошо'))
        }else if (isSecure === false){
            dispatch(setStatusFileAction(id, 'Заражен'))
        }
        dispatch(setIsStatusUpdatingAction(id, false))
    }

    function getStatusContent(status, isStatusUpdating, id){
        let statusContent;      

        if(isStatusUpdating === true){
            statusContent = <MiniLoading />
        }else if(status === 'none'){
            statusContent = (<div className="mx-auto w-[90px] flex flex-col items-center">
                                <p>?</p>
                                <div className="btn ml-2 mt-1"
                                onClick={() => handleClickstatus(id)}>
                                    Посмотреть
                                </div>
                            </div>)
        } else if (status === 'Все хорошо'){
            statusContent = <p className="text-green-500 text-bold">Файл не заражён</p>
        } else if (status === 'Заражен'){
            statusContent = <p className="text-red-500 text-bold">Файл заражён</p>
        }

        return statusContent
    }


    const pageLimit = Math.ceil(files.length / filesPerPage);
    const lastFileIndex = currentPage * filesPerPage;
    const firstFileIndex = lastFileIndex - filesPerPage;
    let currentFiles = files.slice(firstFileIndex, lastFileIndex);
    
   

    if (filteredFiles.length > 0 ||  searchValue !== ''){
        currentFiles = filteredFiles
    }

    return(
        <>


            <table className="bg-blue-600 dark:bg-blue-800  w-full text-xs text-center newBordered" cellPadding="0">

                <thead>
                    <tr>
                        <th>№ n/n</th>
                        <th>ID</th>
                        <th>Имя Файла</th>
                        <th>Статус проверки</th>
                        <th>Кто обратился</th>
                        <th>Действие</th>
                    </tr>
                </thead>


                <tbody>

                {files.length > 0 && currentFiles.map((item, index) => {
                            
                        


                                
                        return (
                            <tr key={item.id} className="dark:bg-blue-700">
                                <td>{index+1}</td>
                                <td><div className="w-[220px] overflow-scroll">{item.id}</div></td>
                                <td>{item.name}</td>
                                <td>
                                    {getStatusContent(item.status, item.isStatusUpdating, item.id)}
                                </td>
                                <td className="flex justify-center items-center "><img className="newBordered h-[40px] mr-2" alt="Ava" src={item.from.picture.medium}/>{item.from.login.username}</td>
                                <td >
                                    <div className="flex justify-center newBordered">
                                        <DeleteIcon className='delete-icon' onClick={() => handleClick(index)} width='30px' height='30px'/>
                                    </div>
                                </td>
                            </tr>
                        )
                
                })}
                    
                </tbody>

            </table>    
            { filteredFiles.length === 0 && searchValue !== '' && <NotFoundItem />}
            {!filteredFiles.length && searchValue === '' &&  <Pagination currentPage={currentPage} pageLimit={pageLimit} setCurrentPage={setCurrentPage}/>}

        </>
            
    )
}