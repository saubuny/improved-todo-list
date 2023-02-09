import './styles/App.scss';
import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import TodoTabs from './components/TodoTabs';

function App() {
	const [todos, setTodos] = useState([
		{ id: uuidv4(), text: 'Take out the trash', status: 'In Progress' },
		{ id: uuidv4(), text: 'Feed the dog', status: 'Not Started' },
	]);

	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
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

	return (
		<>
			<div className="App">
				<TodoForm addTodo={addTodo} />
				{/* <TodoTabs /> */}
				<div className="todo-list">
					{todos.map((todo) => (
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
