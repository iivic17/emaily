import React from 'react';
import './Landing.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import * as animationData from '../../animations/landing-illustration.json';

const Landing = () => {
	return (
		<div className='landing'>
			<h2 className='landing-heading'>
				We Ignite Your <span className='heading-underline'>Ideas</span>,
				<br />
				Push Your <span className='heading-underline'>Boundaries</span>
				<br />
				Value Your <span className='heading-underline'>Partnership</span>,
			</h2>
			<div className='landing-main-cols'>
				<div className='landing-text-box'>
					<p>
						When it comes to new products,
						<br /> services or software, the Emaily
						<br />
						team believes in the notion of
						<br />
					</p>
					<span className='gradient-text bold'>
						“design - build - validate”.
					</span>
					<p>
						With our team of experts, we give your
						<br />
						go-to-market strategy wings and cater
						<br />
						to your needs with knowledge, passion
						<br />
						and speed.
					</p>
					<p>
						We are here to help you in a multitude
						<br />
						of ways that aren't designed to just
						<br />
						deliver a new product or service, as we
						<br />
						are equally keen to forge a long-term
						<br />
						relationship with your team and the
						<br />
						wider company.
					</p>
					<p>
						When working with Emaily, you get
						<br />
						to select a working relationship from a<br />
						variety of options, and we couldn’t be
						<br />
						more thrilled to get the ball rolling on
						<br />
						your project.
					</p>
				</div>
				<div className='landing-animation-box'>
					<Player src={animationData} className='player' loop autoplay />
				</div>
			</div>
		</div>
	);
};

export default Landing;
