import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from './store';
import { Provider } from 'react-redux';

// Development only axios helper
import axios from 'axios';
window.axios = axios;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
);
