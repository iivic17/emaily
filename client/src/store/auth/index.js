import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
	const res = await axios.get('/api/current_user');
	return res.data;
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loggedIn: false,
		googleId: null,
		facebookId: null,
		id: null,
	},
	reducers: {
		// increment(state) {
		// 	state.value++;
		// },
		// decrement(state) {
		// 	state.value--;
		// },
		// incrementByAmount(state, action) {
		// 	state.value += action.payload;
		// },
	},
	extraReducers: builder => {
		builder.addCase(fetchUser.pending, (state, action) => {});

		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.loggedIn = Boolean(action.payload);
			state.googleId = action.payload.googleId || null;
			state.facebookId = action.payload.facebookId || null;
			state.id = action.payload._id;
		});

		builder.addCase(fetchUser.rejected, (state, action) => {});
	},
});

// export const { increment, decrement, incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
