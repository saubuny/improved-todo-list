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
	const updateTodoList = (newTodoText) => {
		setTodos(...todos, { id: uuidv4(), text: newTodoText });
	};

	return (
		<>
			<div className="App">
				<div className="todo-list">
					<TodoForm updateTodoList={updateTodoList} />
					{todos.map((todo) => {
						return <Todo text={todo.text}></Todo>;
					})}
				</div>
			</div>
		</>
	);
}

export default App;
