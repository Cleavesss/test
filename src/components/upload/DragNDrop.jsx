import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDragAction, setOpacityAction} from "store/reducers/uploadReducer";
import {setNewFileAction} from 'store/reducers/filesReducer.js';
import {fetchUploadFile} from 'asyncFunc/postFileVTDoc.js';
import Modal from "components/COMMON/Modal";
import Loading from 'components/COMMON/Loading.jsx'

export default function DragNDrop(){


    let [isFileQueue, setIsFileQueue] = useState(false)
    
    let drag = useSelector(state => state.upload.drag)
    
    let currentUser = useSelector(state => state.current.currentUser);
    let currentToken = useSelector(state => state.current.currentToken);
    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setOpacityAction(true))

        return () => dispatch(setOpacityAction(false))
    }, [])

    
    function dragStartHandler(evt){
        evt.preventDefault();
        dispatch(setDragAction(true))
    }

    function dragLeaveHandler(evt){
        evt.preventDefault();
        dispatch(setDragAction(false))
    }

    function onDropHanbler(evt){
        evt.preventDefault();
        setIsFileQueue(true)
        let files = [...evt.dataTransfer.files]
        for (let i = 0; i < files.length; i++){
            setTimeout(async() => {
                let file = files[i];
                let id = await fetchUploadFile(file, currentToken);
                if (typeof id !== 'string'){
                    console.log('Произошла ошибка')
                    setIsFileQueue(false)
                    setDragAction(false)
                    return
                }
                dispatch(setNewFileAction({from: currentUser, status: 'none', isStatusUpdating: false, name: file.name, id: id}))
               
            }, 25000*(i+1))
            
        }
        setTimeout(() => setIsFileQueue(false), 26000*files.length)
        dispatch(setDragAction(false))
    }

    if (isFileQueue){
        
        return (
            <Modal>
                <Loading x={2} />
                <p className="mt-5 text-white text-bold ">Пожалуйста дождитесь, когда это окно пропадёт</p>
            </Modal>
        )
    }

    return(
        <div>

        {          
            drag 
            ?
            <div 
                className="w-80vw h-70vh flex justify-center items-center text-white text-center text-4xl backdrop-blur-lg newBordered  "
                onDragStart={evt => dragStartHandler(evt)}
                onDragLeave={evt => dragLeaveHandler(evt)}
                onDragOver={evt => dragStartHandler(evt)}
                onDrop={evt => onDropHanbler(evt)}
            >Отпустите файлы, чтобы загрузить их</div>
            : 
            <div 
                className="w-80vw h-70vh  flex justify-center items-center text-white text-center text-4xl backdrop-blur-sm newBordered"
                onDragStart={evt => dragStartHandler(evt)}
                onDragLeave={evt => dragLeaveHandler(evt)}
                onDragOver={evt => dragStartHandler(evt)}
            > Перетащите файлы, чтобы загрузить их</div>
        }
        </div>    
    )
}