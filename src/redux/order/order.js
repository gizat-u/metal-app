import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const orderReducer = createAsyncThunk("posts/getPosts", async () => {
	return fetch("https://626fe0b1c508beec488b64db.mockapi.io/items").then((res) => res.json())
})

const postSlice = createSlice(({
	name: "posts",
	initialState: {
		posts: [],
	},
	extraReducers: {
		[orderReducer.fulfilled]: (state, action) => {
			state.posts = action.payload
		},
	},
	reducers: {
		pushOrders: (state, action) => {
			console.log(action.payload)
			const posted = [...state.posts].push(action.payload)
			return { posts: posted }
		}
	}
}
))

export default postSlice.reducer;

export const { getOrder, pushOrders } = postSlice.actions
