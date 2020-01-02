const baseUrl = process.env.REACT_APP_BASE_URL;

export const getTodos = () => fetch(baseUrl).then(res => res.json());

export const saveTodo = name => fetch(baseUrl, {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({name, isComplete: false})
}).then(res => res.json());

export const putTodo = todo => fetch(`${baseUrl}/${todo.id}`, {
	method: 'PUT',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(todo)
}).then(res => res.json());
