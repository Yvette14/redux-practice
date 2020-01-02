import React from "react";

const TodoItem = ({name, isComplete}) => (
	<li>
		<input type="checkbox" defaultChecked={isComplete}/>{name}
	</li>
);

export default ({todos}) => (
	<ul>
		{todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
	</ul>
)
