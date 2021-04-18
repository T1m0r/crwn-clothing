// Create Initial state the first time - same as previously in app.js
const INITIAL_STATE = {
	currentUser: null,
};

// set the default value for state to the initial state
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
