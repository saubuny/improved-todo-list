import { useState } from 'react';
import TodoForm from './components/TodoForm';
import './styles/App.scss';

function App() {
	return (
		<>
			<div className="App">
				<TodoForm></TodoForm>
			</div>
		</>
	);
}

export default App;
