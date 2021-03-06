import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	userState: []
}

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const usered = [...state.userState]
			usered.push(action.payload)
			return { userState: usered }
		},
		removeUser: (state) => {
			state.userState.length = 0
		}
	}
})

export default userReducer.reducer;

export const { setUser, removeUser } = userReducer.actions
