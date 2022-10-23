import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
);

console.log('Stripe key is', process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
console.log('Environment is', process.env.NODE_ENV);
console.log('Environment is', process.env);
