const defaultState = {
    persons: [],
    isFetching: true,
    searchValue: '',
}

const ADD_MANY_PERSONS = "ADD_MANY_PERSONS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_SEARCH_VALUE = " SET_SEARCH_VALUE";

export const personReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_MANY_PERSONS:
            return {
                ...state, 
                persons: action.payload,
                isFetching: false}
        case SET_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.payload
                }
        case  SET_SEARCH_VALUE: 
                return {
                    ...state,
                    searchValue: action.payload
                }
        default:
            return state;
    }
}

export const addManyPersonsAction = (payload) => ({type: ADD_MANY_PERSONS, payload})
export const setIsFatcingAction = (boul) => ({type: SET_IS_FETCHING, payload:boul})
export const setSearchValueAction = (str) => ({type: SET_SEARCH_VALUE, payload:str})