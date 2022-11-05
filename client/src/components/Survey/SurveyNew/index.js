import React, { useEffect } from 'react';
import SurveyForm from './../SurveyForm';
import { useSelector, useDispatch } from 'react-redux';
import SurveyReview from './../SurveyReview';

import './SurveyNew.scss';
import { clearForm } from './../../../store/newForm';

const SurveyNew = () => {
	const reviewMode = useSelector(state => state.newForm.reviewMode);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(clearForm());
		};
	}, [dispatch]);

	return (
		<div className='survey-new'>{reviewMode ? <SurveyReview /> : <SurveyForm />}</div>
	);
};

export default SurveyNew;
