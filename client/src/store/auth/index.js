import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
	return await axios.get('/api/current_user');
});

const authSlice = createSlice({
	name: 'auth',
	initialState: { value: 0 },
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		incrementByAmount(state, action) {
			state.value += action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchUser.pending, (state, action) => {});

		builder.addCase(fetchUser.fulfilled, (state, action) => {
			console.log(action.payload.data.facebookId);
		});

		builder.addCase(fetchUser.rejected, (state, action) => {});
	},
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
