import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth.loggedIn) {
			case null:
				return 'Still deciding';
			case false:
				return 'Not logged in';
			default:
				return 'Logged in';
		}
	}

	render() {
		return (
			<nav className='header'>
				<h1 className='logo gradient-text'>Emaily</h1>
				<span>{this.renderContent()}</span>
				<div className='sign-in-group'>
					<button className='button'>
						Sign in with <span className='gradient-text'>Google</span>
					</button>
					<button className='button'>
						Sign in with <span className='gradient-text'>Facebook</span>
					</button>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => ({
	auth,
});

export default connect(mapStateToProps, null)(Header);
