import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Task 1', rowAssigned: 'Bogdan'},
    {rowNumber: 2, rowDescription: 'Task 2', rowAssigned: 'Olha'},
    {rowNumber: 3, rowDescription: 'Task 3', rowAssigned: 'Bogdan'},
    {rowNumber: 4, rowDescription: 'Task 4', rowAssigned: 'Bogdan'}
  ]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
        </div>
      </div>
        
    </div>
  );
}

export default App;
