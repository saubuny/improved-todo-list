import './styles/App.scss';
import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
	const [todos, setTodos] = useState([
		{ id: uuidv4(), text: 'Take out the trash' },
		{ id: uuidv4(), text: 'Feed the dog' },
	]);

	return (
		<>
			<div className="App">
				<div className="todo-list">
					<TodoForm />
					{todos.map((todo) => {
						return <Todo text={todo.text}></Todo>;
					})}
				</div>
			</div>
		</>
	);
}

export default App;
