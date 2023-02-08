import '../styles/Todo.scss';

function Todo({ text, removeTodo, id }) {
	const handleClick = (e) => {
		removeTodo(id);
		console.log('Clicked');
	};

	return (
		<>
			<div className="todo-card">
				<span className="todo-card_text">{text}</span>
				<button onClick={handleClick} className="todo-card_x">
					X
				</button>
			</div>
		</>
	);
}

export default Todo;
