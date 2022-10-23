import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from './../../store/user';

class Payments extends Component {
	onTokenCallback(token) {
		this.props.handleToken(token);
	}

	render() {
		return (
			<StripeCheckout
				name='Emaily'
				description='Collect feedback from your users'
				image='/logo192.png'
				amount={500}
				token={token => this.onTokenCallback(token)}
				panelLabel='Buy (5) credits for'
				stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
				<button className='button'>
					Buy <span className='gradient-text bold uppercase'>credits</span>
				</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payments);
