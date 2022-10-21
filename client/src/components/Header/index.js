import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
	render() {
		return (
			<nav className='header'>
				<h1 className='logo'>Emaily</h1>
				<div className='sign-in-group'>
					<button className='button'>Sign in with Google</button>
					<button className='button'>Sign in with Facebook</button>
				</div>
			</nav>
		);
	}
}

export default Header;
