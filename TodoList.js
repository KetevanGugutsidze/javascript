
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const removeTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };

  const toggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={() => toggleTodo(index)}>{todo.done ? 'Undo' : 'Done'}</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
