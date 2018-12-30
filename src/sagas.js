import { all } from 'redux-saga/effects';
import searchSagas from './modules/search/sagas';

export default function* saga () {
	yield all([
		searchSagas()
	]);
};