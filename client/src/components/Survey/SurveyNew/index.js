import React, { useEffect } from 'react';
import SurveyForm from './../SurveyForm';
import { useSelector, useDispatch } from 'react-redux';
import SurveyReview from './../SurveyReview';

import './SurveyNew.scss';
import { clearForm } from './../../../store/newForm';

const SurveyNew = () => {
	const reviewMode = useSelector(state => state.newForm.reviewMode);
	const state = useSelector(state => state.newForm);
	console.log('STATE', state);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			console.log('CALLED');
			dispatch(clearForm());
		};
	}, [dispatch]);

	return (
		<div className='survey-new'>{reviewMode ? <SurveyReview /> : <SurveyForm />}</div>
	);
};

export default SurveyNew;
