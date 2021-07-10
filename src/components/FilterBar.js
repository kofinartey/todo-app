import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/FilterBarStyles";
import { withStyles } from "@material-ui/styles";

function FilterBar({ classes }) {
  const { todos, clearCompleted } = useContext(TodoContext);
  const { isDark } = useContext(ThemeContext);
  const numUncompletedTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div
      className={classes.FilterBar}
      style={{ backgroundColor: isDark ? "#25273C" : "#FAFAFA" }}
    >
      {todos.length > 0 && (
        <div className={classes.Filters}>
          <p>{`${numUncompletedTodos} items left`}</p>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
          <p onClick={() => clearCompleted()}>Clear Completed </p>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(FilterBar);
