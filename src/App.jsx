import { useState } from 'react';
import './styles/App.scss';
import Todo from './components/Todo';

function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');

	return (
		<>
			<div className="App">
				<form className="todo-form">
					<input
						className="todo-form__input"
						type="text"
						onChange={(e) => setText(e.target.value)}
					/>
				</form>
				<p>{text}</p>
				{}
			</div>
		</>
	);
}

export default App;
