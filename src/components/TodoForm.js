import React, {useState} from "react";
import {connect} from "react-redux";
import {createTodo} from "../actions/todo";

const TodoForm = ({createTodo}) => {
	const [inputValue, setInputValue] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		createTodo(inputValue);
		setInputValue('');
	};


	return (
		<form onSubmit={onSubmit}>
			<input type="text" value={inputValue} onChange={evt => setInputValue(evt.target.value)}/>
		</form>
	);
};

export default connect(null, {createTodo})(TodoForm)
