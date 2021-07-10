import React, { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodosContext";
import styles from "../styles/TodoStyles";
import close from "../images/icon-cross.svg";
import { withStyles } from "@material-ui/styles";
import { Divider } from "@material-ui/core";

function Todo({ todo, classes }) {
  const { toggleCompletion, removeTodo } = useContext(TodoContext);

  const handleCheck = (e) => {
    toggleCompletion(todo.id);
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <div className={classes.Todo}>
      <div className={classes.Todo__content}>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={todo.completed}
        />
        <p
          className={classes.task}
          style={{ textDecoration: todo.completed && "line-through" }}
        >
          {todo.task}
        </p>
        <img
          className={classes.close}
          src={close}
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
