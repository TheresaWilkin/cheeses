import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import * as reducers from './reducers/cheese.js';

const store = createStore(reducers.cheesesReducer, applyMiddleware(thunk));

export default store;
console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<CheeseList />
		</Provider>,
		document.getElementById('app'))
});