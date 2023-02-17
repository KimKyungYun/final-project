import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import GoogleMap from './pages/GoogleMap';
import Home from './pages/Home';
function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/map' element={<GoogleMap />}></Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
