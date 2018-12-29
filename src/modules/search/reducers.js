import { createReducer } from 'reduxsauce';
import orderBy from 'lodash/orderBy';
import findIndex from 'lodash/findIndex';
import { Types } from './actions';

export const INITIAL_STATE = {
	term: '',
	scope: 'all',
	items: null,
	loading: false,
	selectedItemIndex: null,
	selectedItem: null
};

// mod helper function to deal with negative numbers
const mod = (n, div) => ((n % div) + div) % div;

const selectedItemManipulation = (state, manipuilator) => {
	const newIndex = mod(state.selectedItemIndex + manipuilator, state.items.length);
	return { ...state,
		selectedItemIndex: newIndex,
		selectedItem: state.items[newIndex]
	}
};

const reducerHandlers = {
	[Types.REQUEST_ITEMS]: (state = INITIAL_STATE, action) => {
		return {...state,
			term: action.term,
			scope: action.scope,
			items: INITIAL_STATE.items,
			selectedItemIndex: INITIAL_STATE.selectedItemIndex,
			selectedItem: INITIAL_STATE.selectedItem,
			loading: true
		}
	},
	[Types.RECEIVE_ITEMS]: (state = INITIAL_STATE, action) => {
		return {...state,
			items: action.payload,
			loading: false
		};
	},
	[Types.REQUEST_ITEMS_ERROR]: (state = INITIAL_STATE) => {
		return {...state,
			items: INITIAL_STATE.items,
			loading: false
		};
	},
	[Types.SORT_ITEMS]: (state = INITIAL_STATE, action) => {
		const newState = {items: orderBy(state.items, action.field, action.order)};
		if (state.selectedItem !== null) newState.selectedItemIndex = findIndex(newState.items, {trackId: state.selectedItem.trackId});
		return {...state, ...newState};
	},
	[Types.SELECT_ITEM_INDEX]: (state = INITIAL_STATE, action) => {
		return {...state,
			selectedItemIndex: action.index,
			selectedItem: state.items[action.index]
		};
	},
	[Types.UNSELECT_ITEM]: (state = INITIAL_STATE, action) => {
		return {...state,
			selectedItemIndex: INITIAL_STATE.selectedItemIndex,
			selectedItem: INITIAL_STATE.selectedItem
		};
	},
	[Types.SELECT_NEXT_ITEM]: (state = INITIAL_STATE) => selectedItemManipulation(state, 1),
	[Types.SELECT_PREVIOUS_ITEM]: (state = INITIAL_STATE) => selectedItemManipulation(state, -1)
};

export const Reducers = createReducer(INITIAL_STATE, reducerHandlers);
