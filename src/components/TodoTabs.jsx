import '../styles/TodoTabs.scss';

function TodoTabs({ activeTab, modActiveTab }) {
	const handleClick = (e) => {
		modActiveTab(e.target.innerHTML);
	};

	const Tab = ({ tabName, active }) => {
		return (
			<button data-active={active} onClick={handleClick} className="todo-tab">
				{tabName}
			</button>
		);
	};

	return (
		<>
			<div className="container">
				<Tab onClick={handleClick} tabName={'All'} />
				<Tab onClick={handleClick} tabName={'Not Started'} />
				<Tab onClick={handleClick} tabName={'In Progress'} />
				<Tab onClick={handleClick} tabName={'Complete'} />
			</div>
		</>
	);
}

export default TodoTabs;
