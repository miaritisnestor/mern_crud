import {ACTION_TYPES} from '../actions/postMessage';

const initialState = {
    list: []
}

// in a normal application we have one reducer per entity
export const postMessage = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
            
            break;
    
        default:
            state;
    }
}