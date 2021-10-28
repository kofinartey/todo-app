import React, { useState, useContext, useEffect } from "react";
// import { TodoContext } from "../contexts/TodosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { clearCompleted } from "../redux/todoActions";
import FilterBar from "./FilterBar";
import Todo from "./Todo";
import styles from "../styles/TodoListStyles";
import { withStyles } from "@material-ui/styles";

function TodoList(props) {
  const { classes } = props;
  const { isDark } = useContext(ThemeContext);
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const numUncompletedTodos = todos.filter((todo) => !todo.completed).length;

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

  //Separate completed and active todos and store them in state
  useEffect(() => {
    const selectCompleted = () => {
      const done = todos.filter((todo) => todo.completed);
      setCompleted(done);
    };
    selectCompleted();
  }, [todos]);

  useEffect(() => {
    const selectActive = () => {
      const undone = todos.filter((todo) => !todo.completed);
      setActive(undone);
    };
    selectActive();
  }, [todos]);

  //functions for conditional rendering of list
  const renderCompleted = () =>
    completed.map((todo) => <Todo todo={todo} key={todo._id} />);
  const renderActive = () =>
    active.map((todo) => <Todo todo={todo} key={todo._id} />);
  const renderAll = () =>
    todos.map((todo) => <Todo todo={todo} key={todo._id} />);

  //store value for conditional color change
  const conditionalBackground = {
    backgroundColor: isDark ? "#25273C" : "white",
    color: "#8C8C8C",
  };
  // const conditionalText = { backgroundColor: };

  return (
    <div className={classes.TodoList}>
      {/* list */}
      <div className={classes.list} style={conditionalBackground}>
        {filterStatus.active
          ? renderActive()
          : filterStatus.completed
          ? renderCompleted()
          : renderAll()}
      </div>

      {/* statusbar */}
      {todos.length > 0 && (
        <div className={classes.statusBar} style={conditionalBackground}>
          <p>{`${numUncompletedTodos} items left`}</p>
          <p
            onClick={() => {
              dispatch(clearCompleted());
            }}
          >
            Clear Completed
          </p>
        </div>
      )}

      {/* filterbar */}
      {todos.length > 0 && (
        <FilterBar
          filterCompleted={filterCompleted}
          filterActive={filterActive}
          filterAll={filterAll}
          filterStatus={filterStatus}
        />
      )}
    </div>
  );
}

export default withStyles(styles)(TodoList);
