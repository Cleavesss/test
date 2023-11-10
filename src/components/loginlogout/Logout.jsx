import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setCurrentUserAction } from "store/reducers/currentUserReducer";
import { setOpacityAction } from "store/reducers/uploadReducer";

export default function Logout(){

    let currentUser = useSelector(state => state.current.currentUser);
    let dispatch = useDispatch();

    dispatch(setOpacityAction(false));
     
    if (currentUser !== ''){
         dispatch(setCurrentUserAction(''))
         return <Navigate to="/login" replace />
    } else {
        return <Navigate to="/login" replace />
    }
}