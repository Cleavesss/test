const defaultState = {
    currentUser: '',
    currentToken: 'f98409cfdbb0a825dd4de751a85f26c037cea3553ae050ee47cc6e93d4471f01',
}

const SET_CURRENT_USER = "SET_CURRENT_USER ";
const SET_CURRENT_TOKEN = "SET_CURRENT_TOKEN ";

export const currentUserReducer = (state = defaultState, action) => {
    switch (action.type){
        case SET_CURRENT_USER:
            return {...state, currentUser: action.payload}
        case SET_CURRENT_TOKEN:
            return {...state, currentToken: action.payload}
        default: 
            return state;
    }
}

export const setCurrentUserAction = (payload) => ({type: SET_CURRENT_USER, payload});
export const setCurrentTokenAction = (payload) => ({type: SET_CURRENT_TOKEN , payload});