import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapMain from './pages/MapMain';
import InputTodo from './components/Todo/InputTodo';
import TodoMain from './pages/TodoMain';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/map' element={<MapMain />}></Route>
				<Route path='/' element={<TodoMain />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
