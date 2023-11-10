import React, { useEffect } from "react";
import {ReactComponent as LogoTg} from 'images/tg-icon.svg';


export default function Footer(){

 

    return (
        <div className="fixed flex justify-center items-center bottom-0 left-0 h-[75px] w-[500px] text-white text-xl z-30">
            <p className="mr-8">© Copyright </p>
            <p className="mr-8">Cleavesss</p> 
            <a href='https://t.me/cleavess'><LogoTg  className='logo-tg' width="30px" height="30px"/></a>
        </div>    
    )
}