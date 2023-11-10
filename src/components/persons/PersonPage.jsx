import React from "react";
import Search from "components/COMMON/Search.jsx";
import PersonList from "./PersonList.jsx";
import { setSearchValueAction } from "store/reducers/persReducer.js";
import SideBar from 'components/sidebar/SideBar.jsx';
import background from 'images/iconSh.svg';
import ScrollToTop from "components/COMMON/ScrollToTop.jsx";


export default function PersonPage(){
   
    

    
    return(
        <>
            {<img className='fixed w-[700px] right-[-300px] bottom-[-100px]' src={background}/>}
            
            <div className=" hidden  xl:block newBordered  bg-mainColor dark:bg-darkMainColor w-15  min-h-screen">
                <SideBar />
            </div>
            <div className="newBordered relative z-10  px-6 py-4  flex flex-col items-center  bg-mainColor dark:bg-darkMainColor  w-full xl:w-80 min-h-screen">
                
                <Search currentSearch={'persons'} actionCreater={setSearchValueAction}/>

                
                <PersonList />
                
            </div>    
            <ScrollToTop />
        </>
    )
}