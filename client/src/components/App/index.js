import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './../Header';
import Landing from './../Landing';
import './App.scss';
import { useDispatch } from 'react-redux';
import Dashboard from './../Dashboard';
import SurveyNew from '../Survey/SurveyNew';
import { PrivateRoute } from './PrivateRoute';
import { fetchUser } from '../../store/user';
import { PublicRoute } from './PublicRoute';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<div className='main-content-container'>
					<PublicRoute>
						<Route exact path='/' component={Landing} />
					</PublicRoute>
					<PrivateRoute>
						<Route exact path='/surveys' component={Dashboard} />
					</PrivateRoute>
					<PrivateRoute>
						<Route exact path='/surveys/new' component={SurveyNew} />
					</PrivateRoute>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
