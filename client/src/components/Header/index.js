import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth.loggedIn) {
			case null:
				return;
			case false:
				return (
					<div className='sign-in-group'>
						<button className='button'>
							Sign in with <span className='gradient-text'>Google</span>
						</button>
						<button className='button'>
							Sign in with <span className='gradient-text'>Facebook</span>
						</button>
					</div>
				);
			default:
				return <a href='/api/logout'>Sign out</a>;
		}
	}

	render() {
		return (
			<nav className='header'>
				<h1 className='logo gradient-text'>Emaily</h1>
				{this.renderContent()}
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => ({
	auth,
});

export default connect(mapStateToProps, null)(Header);
