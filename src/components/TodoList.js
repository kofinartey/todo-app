import React, { useState, useContext, useEffect } from "react";
import Todo from "./Todo";
import FilterBar from "./FilterBar";
import { TodoContext } from "../contexts/TodosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/TodoListStyles";
import { withStyles } from "@material-ui/styles";

function TodoList(props) {
  const { classes } = props;
  const { isDark } = useContext(ThemeContext);
  const { todos } = useContext(TodoContext);

  //states to hold completed and active todos
  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);

  const [filterStatus, setFilterStatus] = useState({
    completed: false,
    active: false,
  });

  const filterCompleted = () => {
    setFilterStatus({ completed: true, active: false });
  };
  const filterActive = () => {
    setFilterStatus({ completed: false, active: true });
  };
  const filterAll = () => {
    setFilterStatus({ completed: false, active: false });
  };
  //if completed,
  //if active,
  //else render all

  //filter completed
  //filter active

  //Separate completed and active todos and store them in state
  const selectCompleted = () => {
    const done = todos.filter((todo) => todo.completed);
    setCompleted(done);
    // console.log(done);
  };
  const selectActive = () => {
    const undone = todos.filter((todo) => !todo.completed);
    setActive(undone);
    // console.log(undone);
  };

  useEffect(() => {
    selectCompleted();
    selectActive();
  }, [todos]);

  const renderCompleted = () =>
    completed.map((todo) => <Todo todo={todo} key={todo.id} />);
  const renderActive = () =>
    active.map((todo) => <Todo todo={todo} key={todo.id} />);
  const renderAll = () =>
    todos.map((todo) => <Todo todo={todo} key={todo.id} />);

  return (
    <div
      className={classes.TodoList}
      style={{ backgroundColor: isDark ? "#25273C" : "#FAFAFA" }}
    >
      {filterStatus.active
        ? renderActive()
        : filterStatus.completed
        ? renderCompleted()
        : renderAll()}

      {todos.length > 0 && (
        <FilterBar
          filterCompleted={filterCompleted}
          filterActive={filterActive}
          filterAll={filterAll}
        />
      )}
    </div>
  );
}

export default withStyles(styles)(TodoList);
