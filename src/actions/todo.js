import {getTodos, saveTodo} from '../services/todo';

export const TODO_ADD = 'TODO_ADD';
export const addTodo = todo => ({type: TODO_ADD, payload: todo});


export const TODO_LOAD = 'TODO_LOAD';
const loadTodoAction = todos => ({type: TODO_LOAD, payload: todos});

export const fetchTodos = () => {
	return (dispatch) => {
		getTodos().then(todos => {
			dispatch(loadTodoAction(todos));
		})
	}
};

export const createTodo = name => {
	return (dispatch) => {
		saveTodo(name).then(todo => dispatch(addTodo(todo)))
	}
};
