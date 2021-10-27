import React, { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/NewTodoStyles";
import { withStyles } from "@material-ui/styles";

function NewTodo(props) {
  const { classes } = props;
  const [newTodo, setNewTodo] = useState("");
  const { dispatch } = useContext(TodoContext);
  const { isDark } = useContext(ThemeContext);

  const postTodo = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ task: newTodo }),
      });
      const data = await response.json();
      dispatch({ type: "ADD", payload: data });
    } catch (error) {
      console.log("Failed to add new todo");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      console.log(newTodo);
      postTodo();
    }
    setNewTodo("");
  };

  return (
    <div className={classes.NewTodo}>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.input}
          style={{
            backgroundColor: isDark ? "#25273C" : "#FAFAFA",
            color: isDark ? "#FAFAFA" : "#25273C",
          }}
          type="text"
          placeholder="Create a new todo..."
          value={newTodo}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default withStyles(styles)(NewTodo);
