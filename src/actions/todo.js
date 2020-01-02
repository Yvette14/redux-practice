import {getTodos} from '../services/todo';

export const TODO_ADD = 'TODO_ADD';
export const addTodo = inputValue => ({type: TODO_ADD, payload: {name: inputValue, isComplete: false}});


export const TODO_LOAD = 'TODO_LOAD';
const loadTodoAction = todos => ({type: TODO_LOAD, payload: todos});

export const fetchTodos = () => {
	return (dispatch) => {
		getTodos().then(todos => {
			dispatch(loadTodoAction(todos));
		})
	}
};
