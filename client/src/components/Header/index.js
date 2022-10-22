import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
	render() {
		return (
			<nav className='header'>
				<h1 className='logo gradient-text'>Emaily</h1>
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

export default Header;
