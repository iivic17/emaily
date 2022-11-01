import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { submitForm, turnOffReviewMode } from './../../../store/newForm';
import './SurveyReview.scss';

const SurveyReview = () => {
	const dispatch = useDispatch();
	const { surveySubject, surveyTitle, emailBody, recipientList } = useSelector(
		state => state.newForm.data
	);
	const history = useHistory();

	const handleCancelClick = () => {
		dispatch(turnOffReviewMode());
	};

	const handleSendMailClick = () => {
		dispatch(submitForm(history));
	};

	return (
		<div className='survey-review'>
			{/* Survey Subject */}
			<div className='survey-review-item'>
				<span
					className='survey-review-label gradient-text uppercase'
					htmlFor='surveySubject'>
					Survey Subject
				</span>
				<div className='survey-review-data-field'>{surveySubject}</div>
			</div>

			{/* Survey Title */}
			<div className='survey-review-item'>
				<span
					className='survey-review-label gradient-text uppercase'
					htmlFor='surveyTitle'>
					Survey Title
				</span>
				<div className='survey-review-data-field'>{surveyTitle}</div>
			</div>

			{/* Email Body */}
			<div className='survey-review-item'>
				<span
					className='survey-review-label gradient-text uppercase'
					htmlFor='emailBody'>
					Email Body
				</span>
				<div className='survey-review-data-field'>{emailBody}</div>
			</div>

			{/* Recipient List */}
			<div className='survey-review-item'>
				<span
					className='survey-review-label gradient-text uppercase'
					htmlFor='recipientList'>
					Recipient List
				</span>
				<div className='survey-review-data-field'>{recipientList}</div>
			</div>

			<div className='survey-button-group'>
				<button className='button survey-button' onClick={handleCancelClick}>
					Back
				</button>
				<button className='button survey-button' onClick={handleSendMailClick}>
					Send Mail
				</button>
			</div>
		</div>
	);
};

export default SurveyReview;
