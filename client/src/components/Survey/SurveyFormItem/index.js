import React from 'react';
import SurveyInput from '../SurveyInput';
import { ErrorMessage } from '@hookform/error-message';

const SurveyFormItem = ({ errors, register, messages, name, label, placeholder }) => {
	return (
		<div className='survey-form-item'>
			<label className='survey-form-label gradient-text uppercase' htmlFor={name}>
				{label}
			</label>
			<div className='survey-form-input-box'>
				<SurveyInput
					register={register}
					name={name}
					messages={messages}
					placeholder={errors[name] ? '' : placeholder}
				/>
				<ErrorMessage
					errors={errors}
					name={name}
					render={({ message }) => (
						<span className='survey-form-error-message'>{message}</span>
					)}
				/>
			</div>
		</div>
	);
};

export default SurveyFormItem;
