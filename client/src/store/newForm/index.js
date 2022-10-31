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
	},
	reducers: {
		clearForm: state => {
			state.data = initialFormData;
		},
		updateForm: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const { clearForm, updateForm } = newFormSlice.actions;
export default newFormSlice.reducer;
