import { combineReducers } from 'redux';
import AppReducer from '../components/organisms/App/App.reducer';


export default function createReducers(injectReducers = {}){
    return combineReducers({
        global: AppReducer,
        ...injectReducers,
    })
}