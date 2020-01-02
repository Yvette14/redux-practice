import React, {useState} from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions/todo";

const TodoForm = ({addTodo}) => {
	const [inputValue, setInputValue] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		addTodo(inputValue);
		setInputValue('');
	};


	return (
		<form onSubmit={onSubmit}>
			<input type="text" value={inputValue} onChange={evt => setInputValue(evt.target.value)}/>
		</form>
	);
};

export default connect(null, {addTodo})(TodoForm)
