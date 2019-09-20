import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSagaAndReducer from './injectSagaAndReducer';
import { store } from '../app';
import { ejectSaga } from './sagaInjectors';

export const getWrappedComponent = (
    WrappedComponent, { key, reducer, saga, }
) => {
    class WrapperComponent extends React.Component {

    constructor(props){
        super(props);
        injectSagaAndReducer(key, store, saga, reducer);
    }

    componentWillUnmount() {
        ejectSaga(key, store);
        delete store.injectedSagas[key];
    }

    render() {
        return <WrappedComponent  {...this.props} />
    }
}
    return WrapperComponent
}

export default (WrappedComponent,
    {
        mapStateToProps,
        mapDispatchToProps,
        key,
        reducer,
        saga
    },
) => {
    const Component = getWrappedComponent(WrappedComponent, {
        key,
        reducer,
        saga,
    });
    const connectWith = connect(mapStateToProps, mapDispatchToProps);
    return compose(connectWith)(Component);
}
