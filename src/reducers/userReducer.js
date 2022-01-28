const initialState = {
	token: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {
				token: action.payload,
			};

		case 'SIGN_OUT':
			return {
				token: null,
			};

		default:
			return state;
	}
};

export default userReducer;
