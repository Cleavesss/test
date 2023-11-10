import React from "react";
import SideBar from "components/sidebar/SideBar";
import background from 'images/traceredFile.svg';
import FilesTable from "./FilesTable";
import InputForToken from "./InputForToken";
import autoUpdate from 'images/autoUpdate.png'
import download from 'images/icon-download.png';
import { useDispatch } from "react-redux";
import {setIsAutoUpdate, setSearchValueAction} from 'store/reducers/filesReducer.js'
import Search from "components/COMMON/Search.jsx";
import { Link } from "react-router-dom";

export default function FilesPage(){


    let dispatch = useDispatch();
    function handleClickAutoUpdate(){
      
        dispatch(setIsAutoUpdate(true))
        setTimeout(() =>  dispatch(setIsAutoUpdate(false)), 1000 )
       
    }


    return (
        <>
            {<img className='fixed w-[300px] right-[-85px] bottom-[00px]' src={background} alt="Фон файл"/>}
            <div className=" hidden  xl:block newBordered  bg-mainColor dark:bg-darkMainColor w-15  min-h-screen">
                <SideBar />
            </div>

            <div className="newBordered relative z-10  px-6 py-4  flex flex-col items-center  bg-mainColor dark:bg-darkMainColor  w-full xl:w-80 min-h-screen">
                <div className="flex mb-5 justify-between">
                    <InputForToken />
                    <Link to="/upload" className="flex items-center justify-center border-2 newBordered px-2 py-2">
                        <span onClick={handleClickAutoUpdate} className="h-[30px] flex px-4 py-6  bg-white rounded-3xl items-center shadow-lg search">
                            <img src={download}  className="w-6 h-6" alt="download"/>
                        </span>
                    </Link>
                    <div className="flex items-center justify-center border-2 newBordered px-2 py-2">
                        <div onClick={handleClickAutoUpdate} className="mr-5 h-[30px] flex px-4 py-6  bg-white rounded-3xl items-center shadow-lg">
                            <img src={autoUpdate}  className="w-6 h-6" alt="autoupdate"/>
                        </div>
                        <Search currentSearch={'files'} actionCreater={setSearchValueAction}/>
                    </div>
                </div>
                <FilesTable />
            </div>    
        </>
    )
}