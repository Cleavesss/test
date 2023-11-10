import React from "react";
import WrapperVideo from "components/wrappers/WrapperVideo.jsx";
import DragNDrop from "components/upload/DragNDrop.jsx";
import video from 'images/main-video.mp4'
import StandartUpload from "components/upload/standartUpload.jsx";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector.js";


export default function Upload(){



    let currentUser = useSelector(state => state.current.currentUser);

    if (currentUser === '') return <Navigate to='/login' replace/>;

    return(
        <div className="absolute top-0 left-0 z-0">
            
            <WrapperVideo src={video}>
                <DragNDrop />
                <StandartUpload />
            </WrapperVideo>
        </div>    
    )
}