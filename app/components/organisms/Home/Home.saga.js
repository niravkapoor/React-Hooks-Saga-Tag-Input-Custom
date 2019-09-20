import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_MOVIE_NAME } from './Home.constant';
import API from '../../../api/fetch-lib';
import ApiRegistery from '../../../api/api-registery';
import { saveMovieList } from './Home.actions';
import { toggleLoader } from '../App/App.actions';

function* getMovieSaga(payload) {
    try{
        yield put(toggleLoader(true));
        const response = yield call(API.get, ApiRegistery.buildApiUrl(GET_MOVIE_NAME, payload.options));
        switch(response.Response){
            case "True":
                yield put(saveMovieList(response));
                break;
            default:
                yield put(saveMovieList(response));
                break;
        }
    }
    catch(err) {
        console.log('Error in getMovie Saga', err);
        yield put(saveMovieList({Response: "False", Message: 'Error fetching the Record'}));
    }
    finally{
        yield put(toggleLoader(false));
    }
}

export default function* HomeSaga() {
    try{
        yield takeLatest(GET_MOVIE_NAME, getMovieSaga);
    }
    catch(err){
        console.log('Error in homesaga', err)
    }
}