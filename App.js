
import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import DoneTodos from './DoneTodos';

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
      <DoneTodos />
    </div>
  );
};

export default App;
