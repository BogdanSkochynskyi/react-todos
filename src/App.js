import React, {useState} from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoTable from './components/TodoTable';


function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Task 1', rowAssigned: 'Bogdan'},
    {rowNumber: 2, rowDescription: 'Task 2', rowAssigned: 'Olha'},
    {rowNumber: 3, rowDescription: 'Task 3', rowAssigned: 'Bogdan'},
    {rowNumber: 4, rowDescription: 'Task 4', rowAssigned: 'Bogdan'}
  ] 
  )

  const addTask = (description, assigned) => {
    if(todos.length > 0) {
      const newTask = {
        rowNumber: todos.length + 1, 
        rowDescription: description, 
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTask]);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTask}>Add new task</button>
          <NewTodoForm addTask={addTask}/>
        </div>
      </div>
        
    </div>
  );
}

export default App;
