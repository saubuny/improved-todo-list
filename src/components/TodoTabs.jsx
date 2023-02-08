import '../styles/TodoTabs.scss';

function TodoTabs() {
	const handleClick = (e) => {};
	return (
		<>
			<div className="container">
				<button onClick={handleClick} className="todo-tab">
					All
				</button>
				<button onClick={handleClick} className="todo-tab">
					Not Started
				</button>
				<button onClick={handleClick} className="todo-tab">
					In Progress
				</button>
				<button onClick={handleClick} className="todo-tab">
					Complete
				</button>
			</div>
		</>
	);
}

export default TodoTabs;
