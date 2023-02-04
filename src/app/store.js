import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './rootReducers';
import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		Map: rootReducers,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
