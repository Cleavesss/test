import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setNewFileAction} from 'store/reducers/filesReducer.js'
import {fetchUploadFile} from 'asyncFunc/postFileVTDoc.js';

 
export default function StandartUpload(){

    let currentUser = useSelector(state => state.current.currentUser);
    let currentToken = useSelector(state => state.current.currentToken);
    let dispatch = useDispatch();
    // let files = useSelector(state => state.files.files)

    async function handleOnChange(evt){
        evt.preventDefault();
        
        let file = evt.target.files[0];
        if(typeof file !== 'object'){
            console.log('Вы не выбрали файл')
            return
        }
        let id = await fetchUploadFile(file, currentToken)
        if (typeof id !== 'string'){
            console.log('Произошла ошибка')
            return
        }
        dispatch(setNewFileAction({from: currentUser, status: 'none', isStatusUpdating: false, name: file.name, id: id}))
        
    }

    function handleOnSubmit(evt){
        evt.preventDefault();
        
       
    }

    


    return(
        <div className="flex justify-center ">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor='file-loader-button' className="btn text-white text-lg py-3 px-6 mr-5">Загрузить файл</label>
                <input
                    id="file-loader-button"
                    type="file"
                    className="opacity-0 absolute z-0"
                    onChange={handleOnChange}
                />
                {/* <label htmlFor='file-upload-button' className="btn text-white text-lg py-3 px-10">Отправить</label>
                <input 
                    id="file-upload-button"
                    type='submit'
                    className="opacity-0 absolute z-0"
                    value="Отправить"
                    
                    /> */}

            </form>
            
        </div>    
    )
}