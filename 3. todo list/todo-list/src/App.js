import { useState } from 'react';
// import './App.css';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
import CompleteTodos from './components/CompleteTodos';
function App() {
  const [todos, setTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])
  const handleDeleteTodo = (i) => {
    setTodos(todos.filter((_, ind) => ind !== i ))
  }

  const handleTodoComplete = (item, i) => {
    setCompleteTodos(prev => ([...prev, item]))
    handleDeleteTodo(i)
  }


  return (
    
    <div className='App-header'>
    <TodoInput setTodos = {setTodos} />
    <h2>Pending Todos</h2>
    <Todos todos={todos} handleDeleteTodo = {handleDeleteTodo} handleTodoComplete={handleTodoComplete} />
    <hr />
    <h2>Complete Todos</h2>
    <CompleteTodos todos={completeTodos}  />

    </div>
  );
}

export default App;
