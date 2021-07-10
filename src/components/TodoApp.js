import React, { useContext } from "react";
import { TodoProvider } from "../contexts/TodosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import FilterBar from "./FilterBar";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import styles from "../styles/TodoAppStyles";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

function TodoApp(props) {
  const { classes } = props;
  const { isDark, setIsDark } = useContext(ThemeContext);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

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
        <TodoProvider>
          <NewTodo />
          <TodoList />
          <FilterBar />
        </TodoProvider>
      </div>
    </div>
  );
}

export default withStyles(styles)(TodoApp);
