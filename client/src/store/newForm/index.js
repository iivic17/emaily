import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchUser } from './../user';

const initialFormState = {
	surveySubject: '',
	surveyTitle: '',
	emailBody: '',
	recipientList: '',
};

const initialState = {
	data: initialFormState,
	reviewMode: false,
	isEmpty: true,
};

export const submitForm = createAsyncThunk(
	'newForm/submitForm',
	async (_, { dispatch, getState }) => {
		const { data } = getState().newForm;

		console.log('ASYNC_THUNK_STATE', data);

		const strData = {
			title: data.surveyTitle,
			subject: data.surveyTitle,
			body: data.emailBody,
			recipients: data.recipientList,
		};

		const res = await axios.post('/api/surveys', strData);
		dispatch(fetchUser(res));
	}
);

const newFormSlice = createSlice({
	name: 'newForm',
	initialState,
	reducers: {
		clearForm: state => {
			state.data = initialFormState;
			state.reviewMode = false;
			state.isEmpty = true;
		},
		updateForm: (state, action) => {
			state.data = action.payload;
			state.isEmpty = false;
		},
		turnOnReviewMode: state => {
			state.reviewMode = true;
		},
		turnOffReviewMode: state => {
			state.reviewMode = false;
		},
	},
	extraReducers: builder => {
		builder.addCase(submitForm.pending, (state, action) => {});

		builder.addCase(submitForm.fulfilled, (state, action) => {});

		builder.addCase(submitForm.rejected, (state, action) => {});
	},
});

export const { clearForm, updateForm, turnOnReviewMode, turnOffReviewMode } =
	newFormSlice.actions;
export default newFormSlice.reducer;
