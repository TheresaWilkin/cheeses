export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
	type: FETCH_CHEESES_SUCCESS,
	cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
	type: FETCH_CHEESES_ERROR,
	error
});

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST
})

export const fetchCheeses = () => {
	return dispatch => {
		dispatch(fetchCheesesRequest());
		const url = 'http://localhost:8080/cheeses';
		return fetch(url).then(response => {
			if (!response.ok) {
				const error = new Error(response.statusText)
				error.response = response
				throw error;
			}
			return response;
		})
		.then(response => response.json())
		.then(data =>
			dispatch(fetchCheesesSuccess(data))
			)
		.catch(error =>
			dispatch(fetchCheesesError(error))
			);
	};
};