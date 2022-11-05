import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { turnOnReviewMode, updateForm } from './../../../store/newForm';

import './SurveyForm.scss';
import SurveyInput from '../SurveyInput';
import SurveyFormItem from '../SurveyFormItem';
import { formConfig } from './formConfig';

const SurveyForm = () => {
	const formData = useSelector(state => state.newForm.data);
	const dispatch = useDispatch();
	const history = useHistory();

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
		dispatch(turnOnReviewMode());
	};

	const renderFields = () => {
		return formConfig.map(({ name, label, placeholder, messages }) => {
			return (
				<SurveyFormItem
					register={register}
					errors={errors}
					messages={messages}
					name={name}
					label={label}
					placeholder={placeholder}
					key={name}
				/>
			);
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='survey-form'>
			{renderFields()}

			<div className='survey-button-group'>
				<button
					className='button survey-button'
					type='button'
					onClick={() => history.push('/surveys')}>
					Cancel
				</button>
				<button className='button survey-button' type='submit'>
					Next
				</button>
			</div>
		</form>
	);
};

export default SurveyForm;
