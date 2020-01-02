export const TODO_ADD = 'TODO_ADD';


export const addTodo = inputValue => ({type: TODO_ADD, payload: {name: inputValue, isComplete: false}});
