import { v4 as uuidv4 } from "uuid";
import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  ADD,
  REMOVE,
  TOGGLE_COMPLETION,
  CLEAR_COMPLETED,
} from "./todoTypes";
const initialState = {
  todos: [],
  loading: false,
  error: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE:
      const newList = state.todos.filter((todo) => todo._id !== action.payload);
      return {
        ...state,
        todos: newList,
      };
    case TOGGLE_COMPLETION:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
};
export default todoReducer;
