import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { setOpacityAction} from "store/reducers/uploadReducer";
import background from "images/bg-404.png";
import {Link} from 'react-router-dom';


export default function NotFound404(){
    
    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setOpacityAction(true))
        return () => dispatch(setOpacityAction(false))
    }, [])
    
    let textClass = 'text-3xl text-white text-center w-[500px] font-404'

    return(
        <div className="absolute top-0 left-0 z-0">
            
            <div className="h-screen w-screen overflow-hidden flex justify-center items-center relative ">

                <img src={background} className='h-full w-full absolute top-0 left-0 object-cover z-10' alt='Фон с Парз-лич' loading="lazy"></img>
                <div className=" absolute top-28 right-4 md:right-12 lg:right-24 xl:rigth-32 2xl:right-36 z-20 flex flex-col justify-center items-center  ">
                    <p className="text-404 font-404">404</p>
                    <div className="backdrop-blur-sm newBordered px-5 py-4 flex flex-col  items-center ">
                        <p className={textClass}>Упс...☺</p>
                        <p className={textClass}>К сожалению, мы не нашли страницы по такому пути.</p>
                        <p className={`${textClass} ` }>Но вирусы мы ищем лучше, и можем найти вирусы в Ваших файлах. Хотите?</p>
                        <Link to="/upload" className="block w-[280px] mt-6 mb-3">
                            <span className="text-white  text-center font-bold text-2xl   btn py-3 px-12">Попробовать</span>
                        </Link>
                    </div>
                </div>    
            </div>
        </div>    
    )
}