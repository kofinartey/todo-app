import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoContext } from "../contexts/TodosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/FilterBarStyles";
import { withStyles } from "@material-ui/styles";

function FilterBar(props) {
  const { classes, filterCompleted, filterActive, filterAll, filterStatus } =
    props;
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
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
    // filterbar contains three main divisions
    //    *display todos left
    //    *Section for filters
    //    *clear completed
    <div
      className={classes.FilterBar}
      style={{ backgroundColor: isDark ? "#25273C" : "white" }}
    >
      {/*   display todos left */}
      <p
        className={classes.todos__left}
      >{`${numUncompletedTodos} items left`}</p>

      {/*   Section for filters */}
      <div className={classes.Filters__wrapper}>
        <label
          htmlFor="all"
          className={classes.filter}
          style={{
            color:
              !filterStatus.completed &&
              !filterStatus.active &&
              "hsl(220, 98%, 61%)",
          }}
        >
          All
        </label>
        <input
          className={classes.input}
          type="radio"
          id="all"
          name="filter"
          onClick={handleAll}
        />

        <label
          htmlFor="active"
          className={classes.filter}
          style={{
            color: filterStatus.active && "hsl(220, 98%, 61%)",
          }}
        >
          Active
        </label>
        <input
          className={classes.input}
          type="radio"
          id="active"
          name="filter"
          onClick={handleActive}
        />

        <label
          htmlFor="Completed"
          className={classes.filter}
          style={{
            color: filterStatus.completed && "hsl(220, 98%, 61%)",
          }}
        >
          Completed
        </label>
        <input
          className={classes.input}
          type="radio"
          id="Completed"
          name="filter"
          onChange={handleCompleted}
        />
      </div>

      {/* //    *clear completed */}
      <p
        className={classes.clear}
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
      >
        Clear Completed{" "}
      </p>
    </div>
  );
}

export default withStyles(styles)(FilterBar);
