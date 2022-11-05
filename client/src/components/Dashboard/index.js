import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SvgDef from '../SvgDef';
import './Dashboard.scss';
import { useDispatch, useSelector } from 'react-redux';

import { PlusIcon } from '../../Icons/PlusIcon';
import { fetchSurveys } from '../../store/surveys';

const Dashboard = () => {
	const dispatch = useDispatch();
	const surveys = useSelector(state => state.surveys.data);

	useEffect(() => {
		dispatch(fetchSurveys());
	}, [dispatch]);

	const renderSurveys = () => {
		return surveys.map(({ _id, title, body, subject, yes, no, dateSent }) => {
			return (
				<div className='survey' key={_id}>
					<h3>{title}</h3>
					<h4>{subject}</h4>
					<p>{body}</p>
					<span>yes:</span> <span>{yes}</span>
					<span>no:</span> <span>{no}</span>
					<time>{dateSent}</time>
				</div>
			);
		});
	};

	return (
		<div className='dashboard'>
			{renderSurveys()}

			<Link to='/surveys/new' className='fixed-bottom-right'>
				<button className='button button-circle new-survey-button'>
					<SvgDef>
						<PlusIcon useGradient />
					</SvgDef>
				</button>
			</Link>
		</div>
	);
};

export default Dashboard;
