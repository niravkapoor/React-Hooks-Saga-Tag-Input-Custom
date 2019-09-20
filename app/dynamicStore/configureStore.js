import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeConfigureStore = (reducer, initialState, middleWare) => createStore(
    reducer,
    initialState,
    composeWithDevTools(...middleWare)
)

export default function configureStore(initialState = {}){
    const sagaMiddleware = createSagaMiddleware();
    const composesagaMiddleWare = [sagaMiddleware];
    const middleWare = [applyMiddleware(...composesagaMiddleWare)]
    const store = makeConfigureStore(createReducer(), initialState, middleWare);
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {};
    return store;
}