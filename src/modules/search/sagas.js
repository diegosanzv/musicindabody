import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Types, Operators } from './actions';
import dataProvider from '../../lib/dataProvider';

export default function* sagas() {
    yield all([
        takeLatest(Types.REQUEST_ITEMS, requestItems)
    ]);
}

function* requestItems({ term, scope }) {
    if (term) {
        try {
            const payload = yield call(dataProvider.search, term, scope);
            yield put(Operators.receiveItems(payload));
        } catch (err) {
            yield put(Operators.requestItemsError(err));
        }
    } else {
        yield put(Operators.receiveItems([]));
    }
}
