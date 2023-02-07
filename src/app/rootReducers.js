import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TodoistApi } from '@doist/todoist-api-typescript';

const api = new TodoistApi('0d5eab937803121b4f948fc106f3c20672bc9da7');

const initialState = {
	place: [],
	center: { x: 33.450701, y: 126.570667, level: 3 },
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
	name: 'myPlace',
	initialState,

	reducers: {
		setPlace: (state, action) => {
			state.place = action.payload;
		},
		setCenter: (state, action) => {
			state.center.x = parseInt(action.payload.x);
			state.center.y = parseInt(action.payload.y);
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
export const { setPlace, setCenter } = rootReducers.actions;
export default rootReducers.reducer;
