import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

export function TodoProvider(props) {
  const [todos, setTodos] = useState([
    { id: 1, task: "call mama", completed: false, active: false },
    { id: 2, task: "call daniel", completed: false, active: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos((todos) => [
      ...todos,
      { id: uuidv4(), task: newTodo, completed: false, active: false },
    ]);
  };

  const toggleCompletion = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    console.log("clear attempted");
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const value = {
    todos,
    setTodos,
    addTodo,
    toggleCompletion,
    removeTodo,
    clearCompleted,
  };
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}
