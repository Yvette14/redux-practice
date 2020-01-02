import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo} from '../actions/todo';

const TodoItem = ({id, name, isComplete, toggleTodo}) => (
	<li>
		<input type="checkbox"
					 defaultChecked={isComplete}
					 onClick={() => toggleTodo({id, name, isComplete: !isComplete})}
		/>{name}
	</li>
);

const TodoList = ({todos, fetchTodos, toggleTodo}) => {
	useEffect(() => {
		fetchTodos()
	}, []);

	return (
		<ul>
			{todos.map((todo, index) =>
				<TodoItem key={index} {...todo} toggleTodo={toggleTodo}/>)}
		</ul>
	);
};

export default connect(
	(state) => ({todos: state.todos}),
	{fetchTodos, toggleTodo}
)(TodoList)
