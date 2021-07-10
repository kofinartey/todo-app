import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/FilterBarStyles";
import { withStyles } from "@material-ui/styles";

function FilterBar(props) {
  const { classes, filterCompleted, filterActive, filterAll } = props;
  const { todos, clearCompleted } = useContext(TodoContext);
  const { isDark } = useContext(ThemeContext);
  const numUncompletedTodos = todos.filter((todo) => !todo.completed).length;

  const handleCompleted = () => {
    filterCompleted();
  };
  const handleActive = () => {
    filterActive();
  };
  const handleAll = () => {
    filterAll();
  };

  return (
    <div
      className={classes.FilterBar}
      style={{ backgroundColor: isDark ? "#25273C" : "#FAFAFA" }}
    >
      {todos.length > 0 && (
        <div className={classes.Filters}>
          <p>{`${numUncompletedTodos} items left`}</p>

          <label htmlFor="all">All</label>
          <input type="radio" id="all" name="filter" onClick={handleAll} />

          <label htmlFor="active">Active</label>
          <input
            type="radio"
            id="active"
            name="filter"
            onClick={handleActive}
          />

          <label htmlFor="Completed">Completed</label>
          <input
            type="radio"
            id="Completed"
            name="filter"
            onChange={handleCompleted}
          />

          <p onClick={() => clearCompleted()}>Clear Completed </p>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(FilterBar);
