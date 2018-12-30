import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import middleware from './middleware';
import reducer from './reducer';
import saga from './saga';

import { routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const historyPush = history.push;
let lastLocation = history.location;
history.listen(location => {
  lastLocation = location;
});
history.push = (pathname, state = {}) => {
  if (
    lastLocation === null ||
    pathname !== lastLocation.pathname + lastLocation.search + lastLocation.hash ||
    JSON.stringify(state) !== JSON.stringify(lastLocation.state)
  ) {
    historyPush(pathname, state);
  }
};

const connectedRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(connectedRouterMiddleware, ...middleware, sagaMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(connectedRouterMiddleware, ...middleware, sagaMiddleware, createLogger())
  }
};

export const store = createStore(reducer(history), composeWithDevTools(getMiddleware()));

sagaMiddleware.run(saga);
