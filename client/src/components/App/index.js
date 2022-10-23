import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './../Header';
import Landing from './../Landing';
import './App.scss';
import * as actions from './../../store/user';
import { connect } from 'react-redux';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		console.info('Current state in redux store:');
		console.log('LOGGED_IN', this.props.state.user.loggedIn);
		console.log('CREDITS', this.props.state.user.credits);

		return (
			<div>
				<BrowserRouter>
					<div className='container'>
						<Header />
						<Route exact path='/' component={Landing} />
						<Route exact path='/surveys' component={Dashboard} />
						<Route exact path='/surveys/new' component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	state,
});

export default connect(mapStateToProps, actions)(App);
