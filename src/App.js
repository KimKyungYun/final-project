import React from 'react';
import './App.css';
import Map from './map/map';
import Navbar from './application/navbar';

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Map></Map>
		</div>
	);
}

export default App;
