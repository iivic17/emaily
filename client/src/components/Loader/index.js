import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
	return (
		<ColorRing
			visible={true}
			height='30'
			width='30'
			ariaLabel='blocks-loading'
			wrapperStyle={{}}
			wrapperClass='blocks-wrapper'
			colors={['#8ec5fc', '#e0c3fc', '#e0c3fc', '#8ec5fc', '#e0c3fc']}
		/>
	);
};

export default Loader;
