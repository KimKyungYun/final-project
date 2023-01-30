import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ id: 0, latitude: 0.0, longtitude: 0.0 }];

const rootReducers = createSlice({
	name: 'myfavorite',
	initialState,

	reducers: {},
});

export default rootReducers.reducers;
