import React, { useReducer, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

//create a reducer fuction
const todoReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return action.payload;
    case "FETCH_ERROR":
      return [];
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
  let initialTodos = [];
  //fetch todos from local storage if there be any
  // const initialTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/todos");
        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
        // setInitialTodos(data);
        // return data;
      } catch (ex) {
        console.log("failed to fetch todos");
        console.log(ex);
      }
    };
    fetchTodos();
  }, []);

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
