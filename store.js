
import { createStore } from 'redux';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, done: false }]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload)
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) => 
          index === action.payload ? { ...todo, done: !todo.done } : todo
        )
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;