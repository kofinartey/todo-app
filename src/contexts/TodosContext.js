import React, { useReducer, useState, useEffect, createContext } from "react";
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

const initialTodos = [
  { id: 1, task: "Go shopping", completed: false, active: false },
  { id: 2, task: "Study a new topic", completed: false, active: false },
];

export function TodoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // //fetch todos from local storage
  // useEffect(() => {
  //   const data = localStorage.getItem("todos");
  //   if (data) {
  //     setTodos(JSON.parse(data));
  //   }
  // }, []);
  // //save todos in local storage
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // const addTodo = (newTodo) => {
  //   setTodos((todos) => [
  //     ...todos,
  //     { id: uuidv4(), task: newTodo, completed: false, active: false },
  //   ]);
  // };

  // const toggleCompletion = (id) => {
  //   const newTodos = todos.map((todo) =>
  //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //   );
  //   setTodos(newTodos);
  // };

  // const toggleCompletion = (id) => {
  //   const newTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, completed: !todo.completed };
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // };

  // const removeTodo = (id) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodos);
  // };

  // const clearCompleted = () => {
  //   console.log("clear attempted");
  //   const updatedTodos = todos.filter((todo) => !todo.completed);
  //   setTodos(updatedTodos);
  // };

  // const value = {
  //   todos,
  //   setTodos,
  //   addTodo,
  //   toggleCompletion,
  //   removeTodo,
  //   clearCompleted,
  // };
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
