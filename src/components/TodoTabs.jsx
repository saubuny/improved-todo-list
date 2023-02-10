import '../styles/TodoTabs.scss';

function TodoTabs({ activeTab, modActiveTab }) {
	const handleClick = (e) => {
		modActiveTab(e.target.innerHTML);
	};

	const Tab = ({ tabName, active }) => {
		return (
			<button
				// I really shouldn't hardcode css like this
				style={active ? { backgroundColor: '#61afef' } : { backgroundColor: '' }}
				onClick={handleClick}
				className="todo-tab"
			>
				{tabName}
			</button>
		);
	};

	return (
		<>
			<div className="container">
				<Tab onClick={handleClick} active={activeTab === 'All' ? true : false} tabName={'All'} />
				<Tab
					onClick={handleClick}
					active={activeTab === 'Not Started' ? true : false}
					tabName={'Not Started'}
				/>
				<Tab
					onClick={handleClick}
					active={activeTab === 'In Progress' ? true : false}
					tabName={'In Progress'}
				/>
				<Tab
					onClick={handleClick}
					active={activeTab === 'Complete' ? true : false}
					tabName={'Complete'}
				/>
			</div>
		</>
	);
}

export default TodoTabs;
