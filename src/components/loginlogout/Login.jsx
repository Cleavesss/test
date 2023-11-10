import React, { useEffect, useState } from "react";
import {Navigate} from 'react-router-dom';
import background from 'images/treceredMacOS.svg';
import { useDispatch, useSelector } from "react-redux";
import {fetchVariantes} from 'asyncActions/login.js';
import { setCurrentUserAction } from "store/reducers/currentUserReducer";
import {setIsFatcingLoginAction} from 'store/reducers/loginReducer.js';
import Loading from 'components/COMMON/Loading.jsx';

export default function Login(){

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [errorEmail, setErrorEmail] = useState('');
    let [errorPassword, setErrorPassword] = useState('');

    let [redirect, setRedirect] = useState(false);

    let dispatch = useDispatch();
    let variantes = useSelector(state => state.login.variantes );
    let isFetchingLogin = useSelector(state => state.login.isFetchingLogin);


    function clearFormData(){
        setEmail('');
        setPassword('');
    }

    function resetErrorMessages(){
        setErrorEmail('');
        setErrorPassword('');
    }


    function handleFormSubmit(e){
        e.preventDefault();
        
        resetErrorMessages();
        dispatch(setIsFatcingLoginAction(true));
        let currentUser = isLoginCorrect(email);
        if(currentUser === undefined){
            dispatch(setIsFatcingLoginAction(false));
            setErrorEmail('Пользователя с таким e-mail не существует');
            clearFormData();
            return;
        } 
        
        let authentificationThisUserOrNot = isPasswordCorrect(currentUser, password);
        dispatch(setIsFatcingLoginAction(false));
        if(authentificationThisUserOrNot === true){
            dispatch(setCurrentUserAction(currentUser))
            setRedirect(true);
        } else {
            setErrorPassword('Проверьте правильность внесённых данных, ведь что-что пошло не так');
            clearFormData();
        }
    }


    function isLoginCorrect(email){
        return  variantes.find((obj) => email === obj.email)  
    }

    function isPasswordCorrect(currentUser, password){
        return password === currentUser.login.password
    }

    useEffect(() => {
        dispatch(fetchVariantes())
    }, [])


    if (redirect) return <Navigate to='/persons' />
    return(
        <div className="fixed top-0 left-0 right-0 right-0 z-50  w-full bg-blue-300/75 dark:bg-blue-800/75   md:inset-0 h-[calc(100%-1rem)] max-h-screen">
            {<img className='fixed blured  w-[100px] lg:w-[300px] right-[0px] z-0 bottom-[20px]' alt="просто ноутбук" src={background}/>}
            <div className="w-[500px] h-[500px] mx-auto mt-32 bg-mainColor dark:bg-darkMainColor newBordered  flex flex-col items-center ">
                    <form onSubmit={handleFormSubmit} className="w-[350px] h-[350px]">
                        <h1 className="text-white text-center text-bold text-2xl mt-20 mb-5">Выполните вход</h1>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="h-[50px] rounded-full w-full indent-2" placeholder="Введите логин"/>
                        {errorEmail && <p className="text-red-500">{errorEmail}</p>}
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="h-[50px] rounded-full w-full mt-5 indent-2" placeholder="Введите пароль"/>
                        {errorPassword && <p className="text-red-500 ">{errorPassword}</p>}
                        <div className="dark:btn h-[50px] mt-5">
                            <input type="submit" value="Войти" className="h-[40px] rounded-full w-full h-full  text-white bg-blue-500 dark:bg-inherit  hover:bg-blue-800"></input>
                        </div>
                    </form>
                    {isFetchingLogin && <Loading x={2}/> }
            </div> 
            becky.sims@example.com <br/>
            misfits  <br/>
            evelise.mendes@example.com
        </div>
    )
}