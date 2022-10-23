import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
	debugger;

	render() {
		return (
			<StripeCheckout
				name='Emaily'
				description='Collect feedback from your users'
				image='/logo192.png'
				amount={500}
				token={token => console.log(token)}
				panelLabel='Buy credits'
				stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
				<button className='button'>
					Buy <span className='gradient-text bold uppercase'>credits</span>
				</button>
			</StripeCheckout>
		);
	}
}

export default Payments;
