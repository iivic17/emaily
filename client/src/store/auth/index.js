import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
	const res = await axios.get('/api/current_user');
	return res.data;
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loggedIn: null,
		googleId: null,
		facebookId: null,
		id: null,
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
		});

		builder.addCase(fetchUser.rejected, (state, action) => {
			state.loggedIn = false;
		});
	},
});

export default authSlice.reducer;
