import React from 'react';

const SurveyInput = ({ register, name, messages, placeholder }) => {
	return (
		<input
			{...register(name, messages)}
			type='text'
			className='input'
			placeholder={placeholder}
			name={name}
			id={name}
		/>
	);
};

export default SurveyInput;
