const initState = {
	todos: [
		{id: 1, name: 'todo1', isComplete: false},
		{id: 2, name: 'todo2', isComplete: false},
		{id: 3, name: 'todo3', isComplete: false},
	]
};

export default (state = initState, action) => {
	switch (action.type) {
		case 'TODO_ADD':
			return {...state, todos: state.todos.concat(action.payload)};
		default:
			return state;
	}
}
