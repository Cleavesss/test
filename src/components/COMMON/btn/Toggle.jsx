import React, { useState } from "react";
import 'style/toggle.css'

export default function Toggle({}){
let [check, setCheck] = useState(false);
let doc = document.getElementsByTagName('html')[0]; // Из коллекции элементов достаю первый и единственный тег html со страницы


function handleClick(){
    setCheck((prev) => !prev);

    doc.classList.toggle('dark')
}
    return (
        <div id="toggles">
            <input type="checkbox" name="checkbox1" id="checkbox1" className="ios-toggle" chacked={check.toString()} onChange={handleClick}/>
            <label htmlFor="checkbox1" className="checkbox-label" data-off="off" data-on="on"></label>
       </div>
    )
}