import {TODO_ADD, TODO_LOAD} from "../actions/todo";

const initState = {
	todos: []
};

export default (state = initState, {type, payload}) => {
	switch (type) {
		case TODO_ADD:
			return {...state, todos: state.todos.concat(payload)};
		case TODO_LOAD:
			return {...state, todos: payload};
		default:
			return state;
	}
}
