import { TOGGLE_LOADER } from './App.constant';

const initState = {
    loader: false
} ;

export default (state = initState, action) => {
    switch(action.type){
        case TOGGLE_LOADER:
            return { ...state, loader: action.payload }
            break;
        default:
            return state;
    }
}