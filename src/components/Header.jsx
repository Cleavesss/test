import React from "react";
import logo from 'images/logo-inverted-ru.svg';
import Toggle from 'components/COMMON/btn/Toggle.jsx';
import Button from 'components/COMMON/btn/Button.jsx';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(){

    let isOpacity = useSelector(state => state.upload.isPageWithOpacityHeader);
    let headerClass = "bg-mainColor  dark:bg-darkMainColor  py-6 w-full h-24 sticky z-20 top-0 " + `${isOpacity ? 'bg-transparent dark:bg-transparent' : ''}`;
    let isCurrentUser = useSelector(state => state.current.currentUser);
   
    let textForButton = (isCurrentUser === '') ? 'Войти'  :  'Выйти';
    let linkForButton = (isCurrentUser === '') ? '/login'  :  '/logout';

    return (
        <nav className={headerClass} >
            <div className="newContainer opacity-100  items-center h-full text-white">
            <div>
                <NavLink to="/">
                <img src={logo} className="w-40" alt="Логотип"/>
                </NavLink>
            </div>
            <div className="space-x-8 flex  items-center">
                <NavLink to="/files" className={({isActive}) =>  (isActive ? 'is-active' : 'navbar-item ')}> 
                    Файлы
                </NavLink>
                <NavLink to="/persons" className={({isActive}) =>   (isActive ? 'is-active' : 'navbar-item ')}> 
                    Персонажи
                </NavLink>
                <Toggle />
                <NavLink to={linkForButton}>
                    <span className="text-white "><Button  text={textForButton}/></span>
                </NavLink>
            </div>
            </div>
        </nav>       
    )
}