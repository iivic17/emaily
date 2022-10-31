import { createSlice } from '@reduxjs/toolkit';

const initialFormData = {
	surveySubject: '',
	surveyTitle: '',
	emailBody: '',
	recipientList: '',
};

const newFormSlice = createSlice({
	name: 'newForm',
	initialState: {
		data: initialFormData,
		reviewMode: false,
		isEmpty: true,
	},
	reducers: {
		clearForm: state => {
			state.data = initialFormData;
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
