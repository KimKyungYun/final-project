import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todolist from './Todolist';
import '../../style/TodoStyle.css';
import { Button, TextField, Typography } from '@mui/material';
import Calendar from './Calendar';
import { getTodo, addTodo } from '../../app/rootReducers';

export default function InputTodo() {
	const state = useSelector((state) => state.Map);
	const [calDate, setCalDate] = useState(null);
	const [todo, setTodo] = useState({ content: '', date: '' });
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getTodo());
	}, [dispatch]);
	const changeTodo = (e) => {
		setTodo((prev) => ({ ...prev, content: e.target.value }));
	};
	const changeDate = (value) => {
		var date = new Date(value.$d);
		const dateInfo =
			date.getFullYear() +
			'년' +
			(date.getMonth() + 1) +
			'월' +
			date.getDate() +
			'일';
		setTodo((prev) => ({ ...prev, date: dateInfo }));
		setCalDate(value);
	};
	const addWork = (e) => {
		e.preventDefault();
		if (todo.content === '') {
			alert('내용을 입력해주세요.');
		} else if (todo.date === '') {
			alert('날짜를 선택해주세요.');
		} else {
			dispatch(addTodo(todo));
			setTodo({ content: '', date: '' });
			setCalDate(null);
		}
	};
	const clickMap = () => {
		window.location.href = '/map';
	};
	return (
		<div className='Main'>
			<div className='Sub'>
				<Typography variant='h4'>Work To Do</Typography>
				<form className='Add flex' onSubmit={addWork}>
					<div>
						<TextField
							sx={{ width: '100%' }}
							type='text'
							placeholder='할일을 입력하세요.'
							onChange={changeTodo}
							value={todo.content}
						/>

						<Calendar calDate={calDate} changeDate={changeDate} />
						<Button variant='contained' type='button' onClick={clickMap}>
							위치
						</Button>
						<Button variant='contained' type='submit'>
							추가
						</Button>
					</div>
				</form>
			</div>
			<div className='List-main'>
				<div className='List-sub'>
					{state.todos &&
						state.todos.map((value) => (
							<Todolist
								key={value.id}
								id={value.id}
								text={value.content}
								date={value.date}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
