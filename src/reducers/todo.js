import {TODO_ADD, TODO_LOAD, TODO_REPLACE} from "../actions/todo";

const initState = {
	todos: []
};

export default (state = initState, {type, payload}) => {
	switch (type) {
		case TODO_ADD:
			return {...state, todos: state.todos.concat(payload)};
		case TODO_LOAD:
			return {...state, todos: payload};
		case TODO_REPLACE:
			return {...state, todos: state.todos.map(
					todo => todo.id === payload.id ? payload : todo)};
		default:
			return state;
	}
}
