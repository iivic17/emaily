import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

export const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActionPaths: ['meta.arg', 'payload.history'],
			},
		}),
});
