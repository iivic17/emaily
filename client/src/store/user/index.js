import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async preloadedRes => {
	if (preloadedRes) return preloadedRes.data;
	const res = await axios.get('/api/current_user');
	return res.data;
});

export const handleToken = createAsyncThunk(
	'user/handleToken',
	async (token, { dispatch }) => {
		const res = await axios.post('/api/stripe', token);
		dispatch(fetchUser(res));
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState: {
		loggedIn: null,
		googleId: null,
		facebookId: null,
		id: null,
		credits: 0,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUser.pending, (state, action) => {
			state.loggedIn = null;
		});

		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.loggedIn = Boolean(action.payload);
			state.googleId = action.payload.googleId || null;
			state.facebookId = action.payload.facebookId || null;
			state.id = action.payload._id;
			state.credits = action.payload.credits;
		});

		builder.addCase(fetchUser.rejected, (state, action) => {
			state.loggedIn = false;
		});
	},
});

export default userSlice.reducer;
