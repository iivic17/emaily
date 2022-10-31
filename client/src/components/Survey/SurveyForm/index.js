import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const SurveyForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			surveySubject: '',
			surveyTitle: '',
			emailBody: '',
			recipientList: '',
		},
		delayError: 300,
	});
	const onSubmit = data => {
		console.log(data);
	};

	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* Survey Subject */}
			<input
				{...register('surveySubject', {
					required: 'Survey subject is required.',
				})}
				type='text'
			/>
			<ErrorMessage errors={errors} name='surveySubject' />

			{/* Survey Title */}
			<input {...register('surveyTitle', { required: true })} type='text' />
			<ErrorMessage errors={errors} name='surveyTitle' />

			{/* Email Body */}
			<input {...register('emailBody', { required: true })} type='text' />
			<ErrorMessage errors={errors} name='emailBody' />

			{/* Recipient List */}
			<input
				{...register('recipientList', {
					required: true,
					validate: false,
				})}
				type='text'
			/>
			<ErrorMessage errors={errors} name='recipientList' />

			<button className='button' type='submit'>
				Next
			</button>
		</form>
	);
};

export default SurveyForm;
