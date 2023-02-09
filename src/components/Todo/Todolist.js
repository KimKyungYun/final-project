import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../app/rootReducers';
import { Button } from '@mui/material';

export default function Todolist({ id, text, date }) {
	const dispatch = useDispatch();

	return (
		<div className='List'>
			<label htmlFor='todos'>
				<input type='checkbox' />
				{text}
			</label>
			<span htmlFor='todos'>
				{date}
				<Button
					sx={{ float: 'right' }}
					variant='text'
					type='button'
					onClick={() => dispatch(deleteTodo(id))}
				>
					X
				</Button>
			</span>
		</div>
	);
}
