import createReducers from './reducers';

export default function(store, key, reducer) {
    try{
        store.injectedReducers[key] = reducer;
        store.replaceReducer(createReducers(store.injectedReducers));
    }
    catch(err){
        console.log('Error in reducerInjectors', err);
    }
}