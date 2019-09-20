import { DAEMON, ONCE_TILL_UNMOUNT, RESTART_ON_REMOUNT } from './constant';

export const injectSaga = function(store, key, descriptor = {}, args){
    try{
     
        const newDescriptor = { ...descriptor, mode: descriptor.mode || RESTART_ON_REMOUNT };
        const { saga, mode } = newDescriptor;
        
        let hasSaga = store.injectedSagas.hasOwnProperty(key);
        if (!hasSaga || (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)) {
            store.injectedSagas[key] = { ...newDescriptor, task: store.runSaga(saga, args) };
        }
    }
    catch(err){
        console.log('Error in inject Saga', err)
    }
}

export const ejectSaga = function(key, store){
    if (store.injectedSagas.hasOwnProperty( key)) {
        const descriptor = store.injectedSagas[key];
        if (descriptor.mode !== DAEMON) {
          descriptor.task.cancel();
          store.injectedSagas[key] = 'done';
        }
    }
}