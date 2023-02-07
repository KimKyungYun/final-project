import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapMain from './pages/MapMain';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MapMain />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
