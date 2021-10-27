import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodosContext";
import styles from "../styles/TodoStyles";
import CloseIcon from "@material-ui/icons/Close";
import check from "../images/icon-check.svg";
import { withStyles } from "@material-ui/styles";
import { Divider } from "@material-ui/core";
import { ThemeContext } from "../contexts/ThemeContext";

function Todo({ todo, classes }) {
  const { dispatch } = useContext(TodoContext);
  const { isDark } = useContext(ThemeContext);

  const deleteTodo = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/todos/${todo._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "REMOVE", id: data._id });
    } catch (error) {
      console.log("Couldn't delete todo");
      console.log(error);
    }
  };
  const completeTodo = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/todos/${todo._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );
      const data = await response.json();
      dispatch({ type: "TOGGLE_COMPLETION", id: data._id });
    } catch (error) {
      console.log("failed to toggle completion");
      console.log(error);
    }
  };

  const handleCheck = (e) => {
    completeTodo();
    console.log(todo);
  };

  const handleDelete = (e) => {
    let toDelete = e.target.parentElement.parentElement;
    toDelete.style.opacity = "0";
    setTimeout(() => {
      deleteTodo();
    }, 500);
  };

  return (
    <div className={classes.Todo}>
      <div className={classes.Todo__content}>
        {/* Label contains my styled radiobtn and Task.
          This way, clicking either the task or button toggles the default radio button  */}
        <label className={classes.label} htmlFor={`${todo._id}`}>
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
          id={`${todo._id}`}
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
