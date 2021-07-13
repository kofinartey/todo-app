import React, { useReducer, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

//create a reducer fuction
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: uuidv4(), task: action.task, completed: false, active: false },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_COMPLETION":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export function TodoProvider(props) {
  //fetch todos from local storage if there be any
  const initialTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  //save todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
