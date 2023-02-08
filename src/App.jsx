import './styles/App.scss';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [todos, setTodos] = useState([
		{ id: uuidv4(), text: 'Take out the trash' },
		{ id: uuidv4(), text: 'Feed the dog' },
	]);

	const addTodo = (newTodoText) => {
		setTodos([...todos, { id: uuidv4(), text: newTodoText }]);
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
				<div className="todo-list">
					<TodoForm addTodo={addTodo} />
					{todos.map((todo) => (
						<Todo removeTodo={removeTodo} id={todo.id} key={todo.id} text={todo.text} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
