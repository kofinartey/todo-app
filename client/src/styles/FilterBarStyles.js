const styles = {
  FilterBar: {
    width: "100%",
    fontWeight: "700",
    backgroundColor: "white",
    color: "hsl(236, 9%, 61%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    padding: " .5rem 2rem",
    borderRadius: "5px",
    // zIndex: "5",
    boxShadow: "0px 20px 20px 7px rgba(0,0,0,0.05)",
  },

  Filters__wrapper: {
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  filter: {
    marginRight: "1rem",
    "&:hover": {
      color: "hsl(280, 87%, 75%)",
    },
  },
  input: {
    display: "none",
  },

  todos__left: {
    display: "none",
    fontSize: ".8rem",
    color: "#ccc",
  },
  clear: {
    fontSize: ".8rem",
    color: "#ccc",
    display: "none",
    "&:hover": {
      color: "hsl(280, 87%, 75%)",
      cursor: "pointer",
    },
  },

  "@media(min-width: 768px)": {
    FilterBar: {
      justifyContent: "space-between",
    },
    Filters__wrapper: {
      width: "40%",
    },
    todos__left: {
      display: "block",
    },
    clear: {
      display: "block",
    },
  },
};

export default styles;
