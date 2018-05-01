import isFunction from 'lodash/isFunction';
import {Operators as AppOperators} from './modules/app';

const promiseMiddleware = store => next => action => {
	if (isPromise(action.payload)) {
		action.payload
		.then(data => {
			action.payload = data;
			store.dispatch(action);
		})
		.catch(error => {
			store.dispatch(AppOperators.error({
				level: 'error',
				message: error.toString(),
				display: 'Error requesting data. Try again later'
			}));
			action.error = true;
			action.payload = error;
			store.dispatch(action);
		});
		return;
	}

	next(action);
};

function isPromise (p) {
	return p && isFunction(p.then);
}

export { promiseMiddleware };
