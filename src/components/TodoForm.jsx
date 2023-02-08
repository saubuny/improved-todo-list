import '../styles/TodoForm.scss';

function TodoForm() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="todo-form">
				<div>
					<label htmlFor="todo_form_text">Add Todo</label>
				</div>
				<div>
					<input name="todo_form_text" type="text" className="todo-form_text" />
					<button type="submit" className="todo-form_submit-btn">
						Add
					</button>
				</div>
			</form>
		</>
	);
}

export default TodoForm;
