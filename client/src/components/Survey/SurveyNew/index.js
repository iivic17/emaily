import React from 'react';
import SurveyForm from './../SurveyForm';
import { useSelector } from 'react-redux';
import SurveyReview from '../SurveyFormReview';

import './SurveyNew.scss';

const SurveyNew = () => {
	const reviewMode = useSelector(state => state.newForm.reviewMode);

	return (
		<div className='survey-new'>{reviewMode ? <SurveyReview /> : <SurveyForm />}</div>
	);
};

export default SurveyNew;
