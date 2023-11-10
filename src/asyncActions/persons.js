import { addManyPersonsAction, setIsFatcingAction } from "store/reducers/persReducer"
import axios from "axios"

export const fetchPersons = () => {
    return async function (dispatch) {

        let payload = [];

        try{
        
            dispatch(setIsFatcingAction(true))
    
    
            const response = await axios
                .get('https://randomuser.me/api/1.0/?seed=foobar&results=5000&exc=login');
                
            payload = response.data.results;
            
            
        } catch(err){
            console.log(err)
           
        } 
        
        
        dispatch(addManyPersonsAction(payload))
        
    }
}

