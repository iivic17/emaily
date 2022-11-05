import React from 'react';

const SvgDef = ({ children }) => {
	return (
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
			{children}
		</svg>
	);
};

export default SvgDef;
