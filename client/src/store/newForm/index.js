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
		formData: initialFormData,
		reviewMode: false,
	},
	reducers: {
		clearForm: state => {
			state.formData = initialFormData;
		},
		updateForm: (state, newData) => {
			state.formData = newData;
		},
	},
});

export default newFormSlice.reducer;
