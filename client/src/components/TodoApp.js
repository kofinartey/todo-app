//package imiports
import React, { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/styles";
//my imports
import { ThemeContext } from "../contexts/ThemeContext";
import { fetchTodos } from "../redux/todoActions";

import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import styles from "../styles/TodoAppStyles";

function TodoApp(props) {
  const { classes } = props;
  const { isDark, setIsDark } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div
      className={classes.TodoApp}
      style={{ backgroundColor: isDark ? "#181824" : "#FAFAFA" }}
    >
      <header className={classes.TodoApp__header}></header>
      <div className={classes.TodoApp__wrapper}>
        <div className={classes.title}>
          <h1 className={classes.heading}>TODO</h1>
          {isDark ? (
            <img src={sun} alt="Theme toggler" onClick={changeTheme} />
          ) : (
            <img src={moon} alt="Theme toggler" onClick={changeTheme} />
          )}
        </div>
        <NewTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default withStyles(styles)(TodoApp);
