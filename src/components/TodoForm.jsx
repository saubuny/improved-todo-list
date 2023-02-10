import '../styles/TodoForm.scss';
import { useState } from 'react';

function TodoForm({ addTodo }) {
	const [todoText, setTodoText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(todoText);
		setTodoText('');
	};

	const handleChange = (e) => {
		setTodoText(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="todo-form">
				<div>
					<label className="todo-form_label" htmlFor="todo_form_text">
						To-Do List
					</label>
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
