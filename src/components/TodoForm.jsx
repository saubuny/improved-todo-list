import { useState } from 'react';

function TodoForm() {
	const [text, setText] = useState('');

	return (
		<>
			<form className="todo-form">
				<input className="todo-form__input" type="text" onChange={(e) => setText(e.target.value)} />
			</form>
			<p>{text}</p>
		</>
	);
}

export default TodoForm;
