import React from "react";
import {connect} from 'react-redux';

const TodoItem = ({name, isComplete}) => (
	<li>
		<input type="checkbox" defaultChecked={isComplete}/>{name}
	</li>
);

const TodoList = ({todos}) =>
	(
		<ul>
			{todos.map((todo, index) => <TodoItem key={index} {...todo}/>)}
		</ul>
	);

export default connect(state => ({todos: state.todos}))(TodoList)
