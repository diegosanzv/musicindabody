import {createActions, createReducer} from 'reduxsauce';

// Actions

const {Types, Creators} = createActions({
	toggleAutoplay: null
}, {prefix: 'PLAYER/'});

export {Types, Creators as Operators};


// Reducers

export const INITIAL_STATE = {
	autoplay: true
};

const reducerHandlers = {
	[Types.TOGGLE_AUTOPLAY]: (state = INITIAL_STATE, action) => {
		return {...state, autoplay: !state.autoplay};
	}
};

export default createReducer(INITIAL_STATE, reducerHandlers);
