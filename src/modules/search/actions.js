import { createActions } from 'reduxsauce';

const { Types, Creators: Operators } = createActions({
	requestItems: ['term', 'scope'],
	receiveItems: ['payload'],
	requestItemsError: ['error'],
	sortItems: ['field'],
	selectItemIndex: ['index'],
	unselectItem: null,
	selectNextItem: null,
	selectPreviousItem: null
}, { prefix: 'SEARCH/' });

export { Types, Operators };
