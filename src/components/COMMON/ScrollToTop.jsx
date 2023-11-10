import React, {useState, useRef, useEffect}  from "react";


export default function ScrollToTop(){


    const offset = 100;
    const ref = useRef();
    let pathLength = 0;
   

    if (ref.current !== undefined ){
    
        pathLength = ref.current.getTotalLength();
        ref.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
        ref.current.style.transition = 'stroke-dashoffset 20ms';

        
    }

    useEffect(() => {
        // console.log(ref.current)
        // console.log(pathLength)
        document.addEventListener('scroll', listenerForWindiw)
        
        return function(){
            document.removeEventListener('srcoll',  listenerForWindiw)
        }
    }, )


    const getTop = () => window.pageYOffset || document.documentElement.scrollTop

    const updateDashoffset = () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const dashoffset =  pathLength - (getTop() * pathLength / height);
        if(ref.current != null) ref.current.style.strokeDashoffset = dashoffset;
    }

    function handleClick(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    let [divClassName, setDivClassName] = useState('scroll-up')


    function listenerForWindiw(){

        
        updateDashoffset();

        getTop() > offset
         ? 
         setDivClassName('scroll-up  scroll-up--active ') 
         : 
         setDivClassName("scroll-up  ")

    
    }
   



    return (
        <div className={divClassName} onClick={handleClick}>
            <svg  viewBox="-2 -2 52 52">
                <path ref={ref} className="scroll-up__svg-path"
                    d="
                        M24,0
                        a24,24 0 0,1 0,48
                        a24,24 0 0,1 0,-48
                    "
                />
            </svg>
        </div>
    )
}