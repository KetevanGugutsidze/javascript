// src/DoneTodos.js
import React from 'react';
import { useSelector } from 'react-redux';

const DoneTodos = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div>
      <h2>Done Todos</h2>
      <ul>
        {todos.filter(todo => todo.done).map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneTodos;
