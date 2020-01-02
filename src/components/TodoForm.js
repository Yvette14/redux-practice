import React, {useState} from "react";

export default () => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div>
			<input type="text" value={inputValue} onChange={evt => setInputValue(evt.target.value)}/>
		</div>
	);
};
