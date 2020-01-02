import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/todo';

const TodoItem = ({name, isComplete}) => (
	<li>
		<input type="checkbox" defaultChecked={isComplete}/>{name}
	</li>
);

const TodoList = ({todos, fetchTodos}) => {
	useEffect(() => {
		fetchTodos()
	}, []);

	return (
		<ul>
			{todos.map((todo, index) => <TodoItem key={index} {...todo}/>)}
		</ul>
	);
};

export default connect(
	(state) => ({todos: state.todos}),
	{fetchTodos}
)(TodoList)
