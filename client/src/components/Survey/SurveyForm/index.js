import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { validateEmail } from './../../../utils/validateEmail';

import { useSelector, useDispatch } from 'react-redux';
import { updateForm } from './../../../store/newForm';

import './SurveyForm.scss';

const SurveyForm = () => {
	const formData = useSelector(state => state.newForm.data);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			...formData,
		},
	});

	const onSubmit = data => {
		dispatch(updateForm(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='survey-form'>
			{/* Survey Subject */}
			<div className='survey-form-item'>
				<label
					className='survey-form-label gradient-text uppercase'
					htmlFor='surveySubject'>
					Survey Subject
				</label>
				<div className='survey-form-input-box'>
					<input
						{...register('surveySubject', {
							required: 'Survey subject is required',
						})}
						type='text'
						className='input'
						placeholder={errors.surveySubject ? '' : 'Enter email subject...'}
						name='surveySubject'
						id='surveySubject'
					/>
					<ErrorMessage
						errors={errors}
						name='surveySubject'
						render={({ message }) => (
							<span className='survey-form-error-message'>{message}</span>
						)}
					/>
				</div>
			</div>

			{/* Survey Title */}
			<div className='survey-form-item'>
				<label
					className='survey-form-label gradient-text uppercase'
					htmlFor='surveyTitle'>
					Survey Title
				</label>
				<div className='survey-form-input-box'>
					<input
						{...register('surveyTitle', {
							required: 'Survey title is required',
						})}
						type='text'
						className='input'
						placeholder={errors.surveyTitle ? '' : 'Enter email title...'}
						name='surveyTitle'
						id='surveyTitle'
					/>
					<ErrorMessage
						errors={errors}
						name='surveyTitle'
						render={({ message }) => (
							<span className='survey-form-error-message'>{message}</span>
						)}
					/>
				</div>
			</div>

			{/* Email Body */}
			<div className='survey-form-item'>
				<label
					className='survey-form-label gradient-text uppercase'
					htmlFor='emailBody'>
					Email Body
				</label>
				<div className='survey-form-input-box'>
					<input
						{...register('emailBody', {
							required: 'Email body is required',
						})}
						type='text'
						className='input'
						placeholder={errors.emailBody ? '' : 'Enter content of email...'}
						name='emailBody'
						id='emailBody'
					/>
					<ErrorMessage
						errors={errors}
						name='emailBody'
						render={({ message }) => (
							<span className='survey-form-error-message'>{message}</span>
						)}
					/>
				</div>
			</div>

			{/* Recipient List */}
			<div className='survey-form-item'>
				<label
					className='survey-form-label gradient-text uppercase'
					htmlFor='recipientList'>
					Recipient List
				</label>
				<div className='survey-form-input-box'>
					<input
						{...register('recipientList', {
							required: 'Recipient list is required',
							validate: recipients => validateEmail(recipients),
						})}
						type='text'
						className='input'
						placeholder={
							errors.recipientList
								? ''
								: 'Enter recipients separated by comma...'
						}
						name='recipientList'
						id='recipientList'
					/>
					<ErrorMessage
						errors={errors}
						name='recipientList'
						render={({ message }) => (
							<span className='survey-form-error-message'>{message}</span>
						)}
					/>
				</div>
			</div>

			<button className='button button-full-width survey-form-button' type='submit'>
				Next
			</button>
		</form>
	);
};

export default SurveyForm;
