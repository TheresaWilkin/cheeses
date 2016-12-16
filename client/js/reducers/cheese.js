import * as actions from '../actions/cheese.js';

const initialCheesesState = {
    cheeses: [],
    loading: false,
    error: null
};

export const cheesesReducer = (state=initialCheesesState, action) => {
	if (action.type === actions.FETCH_CHEESES_REQUEST) {
		return Object.assign({}, state, {loading: true});
	}
	else if (action.type === actions.FETCH_CHEESES_SUCCESS) {
		return Object.assign({}, state, {loading: true, error: null, cheeses: action.cheeses});
	}
	else if (action.type === actions.FETCH_CHEESES_ERROR) {
		return Object.assign({}, state, {loading: false, error: action.error});
	}
	return state;
};