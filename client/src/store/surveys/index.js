import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSurveys = createAsyncThunk('surveys/fetchSurveys', async () => {
	const res = await axios.get('/api/surveys');
	return res.data;
});

const surveysSlice = createSlice({
	name: 'surveys',
	initialState: {
		data: [],
		isEmpty: true,
		isLoading: false,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchSurveys.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(fetchSurveys.fulfilled, (state, action) => {
			if (action.payload) {
				state.data = action.payload;

				state.isEmpty = action.payload.length > 0 ? false : true;
			}
			state.isLoading = false;
		});

		builder.addCase(fetchSurveys.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});
export const { loadCredits } = surveysSlice.actions;
export default surveysSlice.reducer;
