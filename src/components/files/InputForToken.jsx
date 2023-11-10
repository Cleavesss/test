import React, { useState } from "react";
import keyIcon from 'images/key-icon.svg';
import iconrepair from 'images/iconRepair.png';
import { useDispatch } from "react-redux";
import {setCurrentTokenAction} from 'store/reducers/currentUserReducer'

export default function InputForToken(){
    
    let [value, setValue] = useState('');
    let dispatch = useDispatch();

    function handleFormSubmit(evt){
        evt.preventDefault();
        console.log('отработало', value)
        dispatch(setCurrentTokenAction(value));
    }

    return (
        <form  onSubmit={(evt) => handleFormSubmit(evt)} className="flex items-center justify-center border-2 newBordered px-2 py-2">
            <div className="mr-5 h-[30px] flex px-4 py-6  bg-white rounded-3xl items-center shadow-lg search">
                <input value={value} onChange={(e) => setValue(e.target.value)} type='text' className="w-0  outline-0 font-medium transition-all duration-1000" placeholder="Впиши ключ и нажми справа"/>
                <img src={keyIcon} className="w-6 h-6" alt="key"/>
            </div>
            <div onClick={(evt) => handleFormSubmit(evt)}  className="h-[30px] flex px-4 py-6  bg-white rounded-3xl items-center shadow-lg search">
               
                <img src={iconrepair} className="w-6 h-6" alt="submitKey"/>
            </div>
        </form>    
    )
}