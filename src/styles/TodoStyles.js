const styles = {
  Todo: {
    fontWeight: "700",
    color: "hsl(236, 9%, 61%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: "1",
    transition: "opacity .5s ease-in-out",
  },
  Todo__content: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ".5rem 2rem",
  },
  label: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  input: {
    display: "none",
  },
  radio__unchecked: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    border: "1px solid #ccc",
  },
  radio__checked: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right, hsl(192, 100%, 67%) ,hsl(280, 87%, 65%))",
  },
  task: {
    padding: "1rem",
    textAlign: "left",
    display: "flex",
    flexWrap: "wrap",
    minwidth: "20rem",
  },
  close: {
    opacity: ".5",
    "&:hover": {
      cursor: "pointer",
      opacity: "1",
      transform: "scale(1.2)",
      transition: "transform .3s ease-in-out",
    },
  },
};

export default styles;
