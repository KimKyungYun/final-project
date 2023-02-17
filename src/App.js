import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GoogleMap from './pages/GoogleMap';
import Home from './pages/Home';
function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route exact path='/' element={<Home />}></Route>
				<Route path='/map' element={<GoogleMap />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
