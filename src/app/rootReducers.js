import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TodoistApi } from '@doist/todoist-api-typescript';

const api = new TodoistApi('0d5eab937803121b4f948fc106f3c20672bc9da7');

const initialState = {
	place: [{ id: 0, name: '', latitude: 0.0, longtitude: 0.0 }],
};

export const getTodo = createAsyncThunk('get/Todo', async () => {
	const res = await api.getTasks();
	return res;
});
export const addTodo = createAsyncThunk(
	'add/Todo',
	async ({ content, dueString }) => {
		const res = await api.addTask({
			content: content,
			dueString: dueString,
		});
		return res;
	}
);

const rootReducers = createSlice({
	name: 'myfavorite',
	initialState,

	reducers: {
		addFavorite: (state, action) => {
			state.push({
				id: action.payload.id,
				name: action.payload.name,
				latitude: action.payload.latitude,
				longtitude: action.payload.longtitude,
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTodo.fulfilled, (state, action) => {
				state.todos = action.payload;
			})
			.addCase(addTodo.fulfilled, (state, action) => {
				state.todos.push(action.payload);
			});
	},
});

export default rootReducers.reducer;
