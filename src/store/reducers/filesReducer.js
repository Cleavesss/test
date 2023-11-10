const defaultState = {
    files: [],
    isAutoUpdate: false,
    searchValue: ''
}

const SET_NEW_FILE = 'SET_NEW_FILE';
const DELETE_FILE = 'DELETE_FILE ';
const SET_STATUS_FILE = 'SET_STATUS_FILE';
const SET_IS_STATUS_UPDATING = 'SET_IS_STATUS_UPDATING ';
const SET_IS_AUTO_UPDATE = 'SET_IS_AUTO_UPDATE';
const SET_SEARCH_VALUE = " SET_SEARCH_VALUE";

export  const filesReducer = (state = defaultState, action) => {
    switch (action.type){
        case SET_NEW_FILE: 
            return {...state, files: [...state.files, action.payload]}

        case DELETE_FILE:
            return {...state, files: state.files.slice(0, action.payload).concat(state.files.slice(action.payload + 1))}

        case SET_STATUS_FILE:
            return {...state, files: state.files.map(file => {
                return file.id === action.id ? {...file, status: action.payload} : file
            })}
        case SET_IS_STATUS_UPDATING:
            return {...state, files: state.files.map(file => {
                return file.id === action.id ? {...file, isStatusUpdating: action.payload} : file
            })}
        case SET_IS_AUTO_UPDATE:
            return {...state, isAutoUpdate: action.payload, files: state.files.map(file => file.status === 'none' ? {...file, isStatusUpdating: true} : file)}
        case  SET_SEARCH_VALUE: 
            return {
                ...state,
                searchValue: action.payload
            }
        default:
             return state;
    }
}

export const setNewFileAction = (payload) => ({type: SET_NEW_FILE, payload })
export const deleteFileAction = (index) => ({type: DELETE_FILE, payload: index })
export const setStatusFileAction = (id, payload) => ({type: SET_STATUS_FILE, id, payload })
export const setIsStatusUpdatingAction =  (id, payload) => ({type: SET_IS_STATUS_UPDATING, id, payload })
export const setIsAutoUpdate = (payload) => ({type: SET_IS_AUTO_UPDATE, payload })
export const setSearchValueAction = (str) => ({type: SET_SEARCH_VALUE, payload:str})