import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

const Dashboard = () => {
	return (
		<div>
			<Link to='/surveys/new'>
				<button className='button button-floating button-circle new-survey-button'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 24 24'
						fill='none'
						strokeWidth='4'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='feather feather-plus'>
						<defs>
							<linearGradient
								id='primary-gradient'
								gradientUnits='userSpaceOnUse'
								gradientTransform='rotate(62)'>
								<stop offset='0%' stopColor='#8ec5fc' />
								<stop offset='100%' stopColor='#e0c3fc' />
							</linearGradient>
						</defs>
						<line
							x1='12'
							y1='5'
							x2='12'
							y2='19'
							stroke='url(#primary-gradient)'></line>
						<line
							x1='5'
							y1='12'
							x2='19'
							y2='12'
							stroke='url(#primary-gradient)'></line>
					</svg>
				</button>
			</Link>
		</div>
	);
};

export default Dashboard;
