import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import apiErrorMiddleware from './apiError';
const customMiddleware = [
    apiErrorMiddleware
];

export const sagaMiddleware = createSagaMiddleware();

export const getMiddleware = (history) => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(routerMiddleware(history), ...customMiddleware, sagaMiddleware);
    }
    else {
        // Enable additional logging in non-production environments.
        return applyMiddleware(routerMiddleware(history), ...customMiddleware, sagaMiddleware, createLogger());
    }
};
