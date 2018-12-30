import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './modules/app';
import search from './modules/search';
import player from './modules/player';

export default (history) => combineReducers({
	app,
	search,
	player,
	router: connectRouter(history)
});
