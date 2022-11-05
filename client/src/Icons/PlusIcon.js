export const PlusIcon = ({ color, useGradient }) => {
	return (
		<>
			<line
				x1='12'
				y1='5'
				x2='12'
				y2='19'
				stroke={
					useGradient ? 'url(#primary-gradient)' : color ? color : '#000'
				}></line>
			<line
				x1='5'
				y1='12'
				x2='19'
				y2='12'
				stroke={
					useGradient ? 'url(#primary-gradient)' : color ? color : '#000'
				}></line>
		</>
	);
};
