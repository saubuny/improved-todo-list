import '../styles/TodoTabs.scss';

function TodoTabs({ activeTab }) {
	const handleClick = (e) => {};

	const Tab = ({ tabName }) => {
		return (
			<button onClick={handleClick} className="todo-tab">
				{tabName}
			</button>
		);
	};

	return (
		<>
			<div className="container">
				<Tab tabName={'All'} />
				<Tab tabName={'Not Started'} />
				<Tab tabName={'In Progress'} />
				<Tab tabName={'Complete'} />
			</div>
		</>
	);
}

export default TodoTabs;
