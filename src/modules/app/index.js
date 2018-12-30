import {createActions, createReducer} from 'reduxsauce';

// Actions

const {Types, Creators} = createActions({
	loaded: null,
	error: ['details'],
	errorShown: null
}, {prefix: 'APP/'});

export {Types, Creators as Operators};


// Reducers

export const INITIAL_STATE = {
	loaded: false,
	error: null
};

const reducerHandlers = {
	[Types.LOADED]: (state = INITIAL_STATE, action) => {
		return { ...state, loaded: true};
	},
	[Types.ERROR]: (state = INITIAL_STATE, action) => {
		return { ...state, error: action.details};
	},
	[Types.ERROR_SHOWN]: (state = INITIAL_STATE, action) => {
		return { ...state, error: INITIAL_STATE.error};
	}
};

export default createReducer(INITIAL_STATE, reducerHandlers);
