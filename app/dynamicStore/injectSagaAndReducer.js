import injectReducer from './reducerInjectors';
import { injectSaga, ejectSaga } from './sagaInjectors';

export default (key, store, saga, reducer) => {
    try{
        // Object.keys(store.injectedSagas).forEach((sagas, sagaName) => {
        //     ejectSaga(sagaName, store)
        //     delete store.injectedSagas[sagaName];
        // });
        
        if (reducer) injectReducer(store, key, reducer);
        if (saga) injectSaga(store, key, { saga });
    }
    catch(err) {
        console.log('Error in injectSagaAndReducer', err)
    }
}