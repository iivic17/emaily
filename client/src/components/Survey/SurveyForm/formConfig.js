import { validateEmail } from './../../../utils/validateEmail';

export const formConfig = [
	{
		name: 'surveySubject',
		label: 'Survey Subject',
		placeholder: 'Enter email subject...',
		messages: {
			required: 'Survey subject is required',
		},
	},
	{
		name: 'surveyTitle',
		label: 'Survey Title',
		placeholder: 'Enter email title...',
		messages: {
			required: 'Survey title is required',
		},
	},
	{
		name: 'emailBody',
		label: 'Email Body',
		placeholder: 'Enter content of email...',
		messages: {
			required: 'Email body is required',
		},
	},
	{
		name: 'recipientList',
		label: 'Recipient List',
		placeholder: 'Enter recipients separated by comma...',
		messages: {
			required: 'Recipient list is required',
			validate: recipients => validateEmail(recipients),
		},
	},
];
