import { createSlice } from '@reduxjs/toolkit';

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
});

export const { clearForm, updateForm, turnOnReviewMode, turnOffReviewMode } =
	newFormSlice.actions;
export default newFormSlice.reducer;
