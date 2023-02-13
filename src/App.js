import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoogleMap from './pages/GoogleMap';
import Introduce from './pages/Home';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<GoogleMap />}></Route>
				<Route path='/main' element={<Introduce />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
