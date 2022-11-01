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
			<div className='survey-button-group'>
				<button className='button button-full-width' onClick={handleCancelClick}>
					Back
				</button>
				<button className='button button-full-width' onClick={handleCancelClick}>
					Send Mail
				</button>
			</div>
		</div>
	);
};

export default SurveyReview;
