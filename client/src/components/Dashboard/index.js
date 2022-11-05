import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SvgDef from '../SvgDef';
import './Dashboard.scss';
import { useDispatch } from 'react-redux';

import { PlusIcon } from '../../Icons/PlusIcon';
import { fetchSurveys } from '../../store/surveys';

const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSurveys());
	}, [dispatch]);

	return (
		<div className='dashboard'>
			<Link to='/surveys/new'>
				<button className='button button-floating button-circle new-survey-button'>
					<SvgDef>
						<PlusIcon useGradient />
					</SvgDef>
				</button>
			</Link>
		</div>
	);
};

export default Dashboard;
