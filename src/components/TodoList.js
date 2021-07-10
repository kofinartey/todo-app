import React, { useState, useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../contexts/TodosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/TodoListStyles";
import { withStyles } from "@material-ui/styles";

function TodoList(props) {
  const { classes } = props;
  const { isDark } = useContext(ThemeContext);
  const { todos } = useContext(TodoContext);
  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);
  //if completed,
  //if active,
  //else render all
  const selectCompleted = () => {
    const done = todos.filter((todo) => todo.completed);
    setCompleted(done);
    console.log(done);
  };

  const selectActive = () => {
    const undone = todos.filter((todo) => !todo.completed);
    setActive(undone);
    console.log(undone);
  };

  const renderCompleted = () => {
    completed.map((todo) => <Todo todo={todo} key={todo.id} />);
  };
  const renderActive = () => {
    active.map((todo) => <Todo todo={todo} key={todo.id} />);
  };
  return (
    <div
      className={classes.TodoList}
      style={{ backgroundColor: isDark ? "#25273C" : "#FAFAFA" }}
    >
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default withStyles(styles)(TodoList);
