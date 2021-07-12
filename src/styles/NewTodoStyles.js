const styles = {
  NewTodo: {
    width: "100%",
    margin: " 2rem 0",
    zIndex: "1",
  },
  input: {
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "1.2rem",
    width: "100%",
    padding: "1rem 1.5rem",
    border: "none",
    borderRadius: "5px",
    "&::placeholder": {
      // color: "#ccc",
      fontWeight: "200",
    },
    "&:focus": {
      outline: "none",
      border: "2px solid #37394E",
    },
  },
};

export default styles;
