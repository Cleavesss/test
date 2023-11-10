import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Search({currentSearch, actionCreater}){

    let value = useSelector(state => state[currentSearch].searchValue);
    let dispatch = useDispatch();

    
    function handleClickEnter(evt){
        evt.preventDefault();
    }

    useEffect(() =>{dispatch(actionCreater(''))}, [])

    let classNameForInput = "w-0  outline-0 font-medium transition-all duration-1000  " + ((value !== '') ? 'w-[400px]' : '')

    return(
        <form onSubmit={handleClickEnter} className="h-[30px] flex px-4 py-6  bg-white rounded-3xl items-center shadow-lg  search">
            <input type="text" value={value} onChange={(evt) => dispatch(actionCreater(evt.target.value))} className={classNameForInput} placeholder="Введите то, что хотите попробовать найти..." />
            <a href='#' className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

            </a> 
        </form>    
    )
}