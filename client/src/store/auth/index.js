import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUser = createAsyncThunk('bundles/myAsyncInSlice', () =>
	axios
		.get('/api_current_user')
		.then(res => res)
		.catch(err => err)
);

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
	extraReducers: {
		[fetchUser.fulfilled]: (state, action) => {},
		[fetchUser.rejected]: (state, action) => {},
	},
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
