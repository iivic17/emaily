import React from 'react';
import { Link } from 'react-router-dom';
import SvgDef from '../SvgDef';
import './Dashboard.scss';

import { PlusIcon } from '../../Icons/PlusIcon';

const Dashboard = () => {
	return (
		<div>
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
