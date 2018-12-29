import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import middleware from './middleware';
import reducer from './reducer';
import saga from './saga';


import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware()

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(myRouterMiddleware, ...middleware, sagaMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(myRouterMiddleware, ...middleware, sagaMiddleware, createLogger())
  }
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));

sagaMiddleware.run(saga);
