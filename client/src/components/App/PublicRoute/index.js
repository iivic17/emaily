import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const PublicRoute = ({ children }) => {
	const loggedIn = useSelector(state => state.user.loggedIn);
	const history = useHistory();

	useEffect(() => {
		if (loggedIn === true) history.push('/surveys');
	}, [loggedIn, history]);

	return children;
};

export { PublicRoute };
