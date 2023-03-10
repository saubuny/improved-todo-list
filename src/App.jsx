import './styles/App.scss';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import TodoTabs from './components/TodoTabs';

// TODO:
// 	- Dropdown menu for status
// 	- Extract todo list into its own component

function App() {
	// Handle Todos
	const [todos, setTodos] = useState([]);

	const addTodo = (todoText) => {
		setTodos([...todos, { id: uuidv4(), text: todoText, status: 'Not Started' }]);
	};

	const modTodo = (id, status) => {
		let newTodos = [...todos];
		const index = todos.findIndex((todo) => todo.id === id);
		newTodos[index].status = status;
		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		let newTodos = [...todos];
		const index = todos.findIndex((todo) => todo.id === id);
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	// Handle Tabs
	const [activeTab, setActiveTab] = useState('All');
	const modActiveTab = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<>
			<div className="App">
				<TodoForm addTodo={addTodo} />
				<TodoTabs activeTab={activeTab} modActiveTab={modActiveTab} />
				{todos.length === 0 && <div className={'no-todos'}>Nothing to show...</div>}
				{/* Extract todo-list into its own component */}
				<div className="todo-list">
					{activeTab === 'All'
						? todos.map((todo) => (
								<Todo
									modTodo={modTodo}
									removeTodo={removeTodo}
									status={todo.status}
									id={todo.id}
									key={todo.id}
									text={todo.text}
								/>
						  ))
						: todos
								.filter((todo) => todo.status === activeTab)
								.map((todo) => (
									<Todo
										modTodo={modTodo}
										removeTodo={removeTodo}
										status={todo.status}
										id={todo.id}
										key={todo.id}
										text={todo.text}
									/>
								))}
				</div>
			</div>
		</>
	);
}

export default App;
