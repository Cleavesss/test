import {addVariantesAction, setIsFatcingLoginAction} from 'store/reducers/loginReducer.js';
import axios from 'axios';


export const fetchVariantes = () => {
    return async function (dispatch) {
    
        dispatch(setIsFatcingLoginAction(true))


        let payload = [];


        try{
        
            const response = await axios
                .get('https://randomuser.me/api/1.0/?seed=foobar&results=5000&inc=email,login,picture');
                
            payload = response.data.results;
        } catch(err){
            console.log(err)
            
        }
        
        dispatch(addVariantesAction(payload))
    }
}