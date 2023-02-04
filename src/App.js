import React from 'react';
import './App.css';
import Map from './application/map';
import Navbar from './application/navbar';

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Map />
		</div>
	);
}

export default App;
