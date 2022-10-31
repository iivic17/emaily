import React from 'react';
import { useDispatch } from 'react-redux';
import { turnOffReviewMode } from '../../../store/newForm';

const SurveyReview = () => {
	const dispatch = useDispatch();

	const handleCancelClick = () => {
		dispatch(turnOffReviewMode());
	};

	return (
		<div className='survey-review'>
			<button className='button button-full-width' onClick={handleCancelClick}>
				Cancel
			</button>
		</div>
	);
};

export default SurveyReview;
