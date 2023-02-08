import '../styles/TodoForm.scss';
import { useState } from 'react';

function TodoForm({ updateTodoList }) {
	const [todoText, setTodoText] = useState('');

	// TODO: have this callback get value of input
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};

	const handleChange = (e) => {
		setTodoText(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="todo-form">
				<div>
					<label htmlFor="todo_form_text">Add Todo</label>
				</div>
				<div>
					<input
						name="todo_form_text"
						type="text"
						onChange={handleChange}
						value={todoText}
						className="todo-form_text"
					/>
					<button type="submit" className="todo-form_submit-btn">
						Add
					</button>
				</div>
			</form>
		</>
	);
}

export default TodoForm;
