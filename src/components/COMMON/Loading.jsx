import React from "react";
import 'style/loading.css';

export default function Loading({x}){
    
    
    let widthAndHeightSpinner = 30 * x;
    let widthAndHeightBlob = 10 * x;
    let marginTop = 50 * x;
    let textSize = Math.floor(x + 1);

    return(
        <div className="flex flex-col  items-center mt-5">
            <div className="relative mr-[60px]">

                <div className="spinner  " style={{width: `${widthAndHeightSpinner}px`, height: `${widthAndHeightSpinner}px`  }}>
                    <div className="blob top" style={{width: `${widthAndHeightBlob}px`, height: `${widthAndHeightBlob}px`  }}></div>
                    <div className="blob bottom" style={{width: `${widthAndHeightBlob}px`, height: `${widthAndHeightBlob}px`  }}></div>
                    <div className="blob left" style={{width: `${widthAndHeightBlob}px`, height: `${widthAndHeightBlob}px`  }}></div>
                    <div className="blob move-blob" style={{width: `${widthAndHeightBlob}px`, height: `${widthAndHeightBlob}px`  }}></div>
                </div>
            </div>
            <p className={`text-white text-${textSize}xl text-bold ml-5  mb-5  `} style={{marginTop: `${marginTop}px`}}>Loading...</p>
        </div>    
    )
}