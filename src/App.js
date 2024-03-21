import ToDoList from './components/TodoList';
import getToDoItems, { getTitle } from './components/ds/todos';
import './App.css'
function App() {
  const todoitems = getToDoItems();
  const todoitems2 = ["1","2","3"];
  return (
    <div className="App">
      Welcome to React App
      <ToDoList myitems={todoitems} mytitle={getTitle()}/>
      <ToDoList myitems={todoitems2} mytitle="second" />
    </div>
  );
}

export default App;
