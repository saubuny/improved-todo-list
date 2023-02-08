import '../styles/TodoForm.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
	const [todoText, setTodoText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({ id: uuidv4(), text: todoText, status: 'Not Started' });
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
						Add Todo
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
