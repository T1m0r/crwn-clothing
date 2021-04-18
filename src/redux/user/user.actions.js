import { UserActionTypes } from "./user.types";
export const setCurrentUser = (user) => ({
	type: UserActionTypes.SET_CURRENT_USER, // same as in the reducer
	payload: user,
});
