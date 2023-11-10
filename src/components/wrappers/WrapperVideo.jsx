import React  from "react";

export default function WrapperVideo({children, src}){
    return(
        <div className="h-screen w-screen overflow-hidden flex justify-center items-center relative">

            <video src={src} className='h-full w-full absolute top-0 left-0 object-cover z-10' type='video/mp4' autoPlay muted loop></video>
            
            <div className="z-20">
                {children}
            </div>    
        </div>
    )
}