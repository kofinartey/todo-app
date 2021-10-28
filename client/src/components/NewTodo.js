import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/styles";

import { postTodo } from "../redux/todoActions";
import { addTodo } from "../redux/todoActions";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/NewTodoStyles";

function NewTodo(props) {
  const { classes } = props;
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const { isDark } = useContext(ThemeContext);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      dispatch(postTodo(newTodo));
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
