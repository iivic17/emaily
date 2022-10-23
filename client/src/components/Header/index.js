import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Payments from './../Payments';

class Header extends Component {
	onSignInWithGoogle() {
		window.location.replace('/auth/google');
	}

	onSignInWithFacebook() {
		window.location.replace('/auth/facebook');
	}

	onSignOut() {
		window.location.replace('/api/logout');
	}

	onLogo() {
		this.props.user.loggedIn
			? this.props.history.push('/surveys')
			: this.props.history.push('/');
	}

	renderContent() {
		switch (this.props.user.loggedIn) {
			case null:
				return;
			case false:
				return (
					<div className='button-group'>
						<button
							className='button'
							onClick={this.onSignInWithGoogle.bind(this)}>
							Sign in with{' '}
							<span className='gradient-text bold uppercase'>Google</span>
						</button>
						<button
							className='button'
							onClick={this.onSignInWithFacebook.bind(this)}>
							Sign in with{' '}
							<span
								className='gradient-text bold uppercase'
								onClick={this.onSignInWithFacebook.bind(this)}>
								Facebook
							</span>
						</button>
					</div>
				);
			default:
				return (
					<div className='header-content'>
						<div className='credits-group'>
							<span className='credits gradient-text'>Credits</span>
							<div className='credits-value-group'>
								<span className='credits-amount bold'>0</span>
								<img
									src='/coin.png'
									alt='credits-icon'
									className='credits-icon'
								/>
							</div>
						</div>
						<div className='button-group'>
							<Payments />
							<button
								className='button'
								onClick={this.onSignOut.bind(this)}>
								Sign out
							</button>
						</div>
					</div>
				);
		}
	}

	render() {
		return (
			<nav className='header'>
				<h1 className='logo gradient-text' onClick={this.onLogo.bind(this)}>
					Emaily
				</h1>
				{this.renderContent()}
			</nav>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	user,
});

export default withRouter(connect(mapStateToProps, null)(Header));
