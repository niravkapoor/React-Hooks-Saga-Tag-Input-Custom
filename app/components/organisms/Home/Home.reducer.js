import { SAVE_MOVIE_LIST } from './Home.constant';

const initState = { movieList: { Search: [] } } ;

export default (state = initState, action) => {
    switch(action.type){
        case SAVE_MOVIE_LIST:
            return { ...state, movieList: action.options }
        default:
            return state;
    }
}