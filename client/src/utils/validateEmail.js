export const validateEmail = recipients => {
	recipients = recipients ?? '';

	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const invalidEmails = recipients
		.split(',')
		.map(email => email.trim())
		.filter(email => !re.test(email));

	console.log(recipients);
	console.log(invalidEmails);

	if (invalidEmails.length === 0) return true;

	if (invalidEmails[0] === '') return 'Trailing commas are not allowed';

	return `Invalid email entered: ${invalidEmails}`;
};
