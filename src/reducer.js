import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './modules/app';
import search from './modules/search';
import player from './modules/player';

export default combineReducers({
	app,
	search,
	player,
	router: routerReducer
});
