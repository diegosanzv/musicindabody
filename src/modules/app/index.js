import {createActions, createReducer} from 'reduxsauce';

// Actions

const {Types, Creators} = createActions({
	loaded: null,
	redirect: ['path'],
	redirected: null,
	error: ['details'],
	errorShown: null
}, {prefix: 'APP/'});

export {Types, Creators as Operators};


// Reducers

export const INITIAL_STATE = {
	loaded: false,
	error: null,
	redirectTo: '',
};

const reducerHandlers = {
	[Types.LOADED]: (state = INITIAL_STATE, action) => {
		return { ...state, loaded: true};
	},
	[Types.REDIRECT]: (state = INITIAL_STATE, action) => {
		return { ...state, redirectTo: action.path};
	},
	[Types.REDIRECTED]: (state = INITIAL_STATE, action) => {
		return { ...state, redirectTo: ''};
	},
	[Types.ERROR]: (state = INITIAL_STATE, action) => {
		return { ...state, error: action.details};
	},
	[Types.ERROR_SHOWN]: (state = INITIAL_STATE, action) => {
		return { ...state, error: INITIAL_STATE.error};
	}
};

export default createReducer(INITIAL_STATE, reducerHandlers);
