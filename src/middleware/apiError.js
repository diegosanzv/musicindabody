import { Operators as AppOperators } from '../modules/app';
import { Types as SearchTypes } from '../modules/search';

const notificationActionTypes = {
    [SearchTypes.REQUEST_ITEMS_ERROR]: 'Error requesting data. Try again later'
};

export default store => next => action => {
    next(action);
    if (action.type in notificationActionTypes) {
        store.dispatch(AppOperators.error({
            level: 'error',
            message: notificationActionTypes[action.type]
        }));
    }
};