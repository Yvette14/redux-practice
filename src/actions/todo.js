import {getTodos, putTodo, saveTodo} from '../services/todo';

export const TODO_ADD = 'TODO_ADD';
export const addTodo = todo => ({type: TODO_ADD, payload: todo});


export const TODO_LOAD = 'TODO_LOAD';
const loadTodoAction = todos => ({type: TODO_LOAD, payload: todos});

export const TODO_REPLACE = 'TODO_REPLACE';
const replaceTodo = todo => ({type: TODO_REPLACE, payload: todo});

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

export const toggleTodo = todo => {
	return (dispatch) => {
		putTodo(todo).then(todo => dispatch(replaceTodo(todo)));
	}
};
