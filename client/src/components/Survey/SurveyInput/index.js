import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormItem } from '../../../store/newForm';

const SurveyInput = ({ register, name, messages, placeholder }) => {
	const dispatch = useDispatch();
	const value = useSelector(state => state.newForm.data[name]);

	const handleInputChange = e => {
		const { value } = e.target;

		dispatch(
			updateFormItem({
				value,
				name,
			})
		);
	};

	return (
		<input
			{...register(name, messages)}
			type='text'
			className='input'
			placeholder={placeholder}
			name={name}
			id={name}
			onChange={handleInputChange}
			value={value}
		/>
	);
};

export default SurveyInput;
