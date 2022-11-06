import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
	const loggedIn = useSelector(state => state.user.loggedIn);
	const history = useHistory();

	useEffect(() => {
		if (loggedIn === false) history.push('/');
	}, [loggedIn, history]);

	return children;
};

export { PrivateRoute };
