import { createActions } from 'reduxsauce';
import dataProvider from '../../lib/dataProvider';


const {Types, Creators} = createActions({
	requestItems: ['term', 'scope'],
	receiveItems: ['payload'],
	sortItems: ['field'],
	selectItemIndex: ['index'],
	unselectItem: null,
	selectNextItem: null,
	selectPreviousItem: null
}, {prefix: 'SEARCH/'});


const Operators = {
	selectItemIndex: Creators.selectItemIndex,
	unselectItem: Creators.unselectItem,
	selectNextItem: Creators.selectNextItem,
	selectPreviousItem: Creators.selectPreviousItem,
	sortItems: Creators.sortItems,
	queryItems: (term, scope) => {
		return dispatch => {
			dispatch(Creators.requestItems(term, scope));
			const payload = term ? dataProvider.search(term, scope) : null;
			dispatch(Creators.receiveItems(payload));
		}
	}
};

export {Types, Operators};
