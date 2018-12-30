import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory';
import isEqual from 'lodash/isEqual';

import { getMiddleware, sagaMiddleware } from './middleware';
import { getReducers } from './reducers';
import sagas from './sagas';

export const history = createHistory();

// workarround to avoid stacking same location multiple times in history
const historyPush = history.push;
let lastLocation = history.location;
history.listen(location => {
  lastLocation = location;
});
history.push = (pathname, state = {}) => {
  const newPath = lastLocation.pathname + lastLocation.search + lastLocation.hash;
  if (lastLocation === null || pathname !== newPath || !isEqual(state, lastLocation.state)) {
    historyPush(pathname, state);
  }
};

export const store = createStore(getReducers(history), composeWithDevTools(getMiddleware(history)));

sagaMiddleware.run(sagas);
