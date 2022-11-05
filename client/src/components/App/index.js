import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './../Header';
import Landing from './../Landing';
import './App.scss';
import * as actions from './../../store/user';
import { connect } from 'react-redux';
import Dashboard from './../Dashboard';
import SurveyNew from '../Survey/SurveyNew';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div className='container'>
						<Header />
						<div className='main-content-container'>

						<Route exact path='/' component={Landing} />
						<Route exact path='/surveys' component={Dashboard} />
						<Route exact path='/surveys/new' component={SurveyNew} />
						</div>
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
