import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

const Dashboard = () => {
	// const editIcon = (
	// 	<>
	// 		<path
	// 			d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'
	// 			stroke='url(#primary-gradient)'></path>
	// 		<path
	// 			d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'
	// 			stroke='url(#primary-gradient)'></path>
	// 	</>
	// );

	const newIcon = (
		<>
			<line x1='12' y1='5' x2='12' y2='19' stroke='url(#primary-gradient)'></line>
			<line x1='5' y1='12' x2='19' y2='12' stroke='url(#primary-gradient)'></line>
		</>
	);

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
						strokeWidth='3'
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
						{newIcon}
					</svg>
				</button>
			</Link>
		</div>
	);
};

export default Dashboard;
