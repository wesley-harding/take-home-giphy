import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import { rootReducer } from '../reducers/rootReducer';
import index from '../sagas';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middleware = [
        applyMiddleware(sagaMiddleware),
    ];

    if (process.env.NODE_ENV === 'production') {
        return createStore(
            rootReducer,
            ...middleware,
        );
    } else {
        return createStore(
            rootReducer,
            composeWithDevTools(
              ...middleware,
            ),
        );
    }
};

export const store = configureStore();

sagaMiddleware.run(index);
