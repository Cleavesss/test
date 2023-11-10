const defaultState = {
    variantes: [],
    isFetchingLogin: false,
   
}

const SET_IS_FETCHING_LOGIN = 'SET_IS_FETCHING_LOGIN';
const ADD_VARIANTES_FOR_AUTH = 'ADD_VARIANTES_FOR_AUTH';


export const loginReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_IS_FETCHING_LOGIN:
            return {...state, isFetchingLogin: action.payload}
        case ADD_VARIANTES_FOR_AUTH:
            return {...state, variantes: action.payload, isFetchingLogin: false}
       
        default:
            return state;
    }
}

export const setIsFatcingLoginAction = (bool) => ({type: SET_IS_FETCHING_LOGIN, payload: bool})
export const addVariantesAction = (payload) => ({type: ADD_VARIANTES_FOR_AUTH , payload})
