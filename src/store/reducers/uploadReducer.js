const defaultState = {
    isPageWithOpacityHeader: false,
    drag: false,
}

const SETTER_OPACITY = 'SETTER_OPACITY';
const SET_DRAG = 'SET_DRAG'


export const uploadReducer = (state = defaultState, action) => {
    switch (action.type){
        case SETTER_OPACITY:
            return {...state, isPageWithOpacityHeader: action.payload}
        case SET_DRAG: 
            return {...state, drag: action.payload}
        default:
            return state;
    }
}

export const setOpacityAction = (bool) => ({type: SETTER_OPACITY, payload: bool});
export const setDragAction = (bool) => ({type: SET_DRAG, payload: bool});