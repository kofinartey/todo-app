import {
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  ADD,
  REMOVE,
  TOGGLE_COMPLETION,
  CLEAR_COMPLETED,
} from "./todoTypes";

export const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST,
});
export const fetchTodosSucess = (users) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: users,
});
export const fetchTodosFailure = (error) => ({
  type: FETCH_TODOS_FAILURE,
  payload: error,
});

export const addTodo = (todo) => {
  return {
    type: ADD,
    payload: todo,
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_COMPLETION,
    payload: id,
  };
};

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch(fetchTodosRequest());
    const response = await fetch("http://localhost:5000/api/todos");
    const data = await response.json();
    dispatch(fetchTodosSucess(data));
  } catch (ex) {
    console.log("failed to fetch todos");
    console.log(ex);
    dispatch(fetchTodosFailure(ex.message));
  }
};

export const postTodo = (todo) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/api/todos", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ task: todo }),
    });
    const data = await response.json();
    dispatch(addTodo(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(removeTodo(data._id));
  } catch (error) {
    console.log(error);
  }
};

export const completeTodoPatch = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(toggleTodo(data._id));
  } catch (error) {
    console.log("Failed to toggle completion");
  }
};

export const clearCompleted = () => async (dispatch) => {
  const action = () => ({ type: CLEAR_COMPLETED });
  try {
    const response = await fetch("http://localhost:5000/api/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(action());
  } catch (error) {
    console.log(error);
  }
};
