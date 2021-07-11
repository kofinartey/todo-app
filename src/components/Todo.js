import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodosContext";
import styles from "../styles/TodoStyles";
import CloseIcon from "@material-ui/icons/Close";
import check from "../images/icon-check.svg";
import { withStyles } from "@material-ui/styles";
import { Divider } from "@material-ui/core";
import { ThemeContext } from "../contexts/ThemeContext";

function Todo({ todo, classes }) {
  const { toggleCompletion, removeTodo } = useContext(TodoContext);
  const { isDark } = useContext(ThemeContext);

  const handleCheck = (e) => {
    toggleCompletion(todo.id);
  };

  const handleDelete = (e) => {
    let toDelete = e.target.parentElement.parentElement;
    toDelete.style.opacity = "0";
    setTimeout(() => {
      removeTodo(todo.id);
    }, 500);
  };

  return (
    <div className={classes.Todo}>
      <div className={classes.Todo__content}>
        {/* Label contains my styled radiobtn and Task.
          This way, clicking either the task or button toggles the default radio button  */}
        <label className={classes.label} htmlFor={`${todo.id}`}>
          <div
            className={
              todo.completed ? classes.radio__checked : classes.radio__unchecked
            }
          >
            {todo.completed && (
              <img className={classes.check} src={check} alt="" />
            )}
          </div>

          {/* //task */}

          <p
            className={classes.task}
            style={{
              textDecoration: todo.completed && "line-through",
              color: isDark ? "white" : "hsl(235, 19%, 35%)",
              opacity: todo.completed && "0.3",
            }}
          >
            {todo.task}
          </p>
        </label>
        <input
          className={classes.input}
          id={`${todo.id}`}
          type="checkbox"
          onChange={handleCheck}
          checked={todo.completed}
        />

        {/* close button */}
        <CloseIcon
          className={classes.close}
          alt={`remove ${todo.task}`}
          onClick={handleDelete}
        />
      </div>
      <div style={{ margin: "0 2px", width: "100%" }}>
        <Divider />
      </div>
    </div>
  );
}

export default withStyles(styles)(Todo);
