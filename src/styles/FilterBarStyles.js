const styles = {
  FilterBar: {
    width: "100%",
    fontWeight: "700",
    backgroundColor: "white",
    color: "hsl(236, 9%, 61%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
    padding: " .5rem 2rem",
    borderRadius: "5px",
    // zIndex: "5",
    boxShadow: "0px 20px 20px 7px rgba(0,0,0,0.05)",
  },

  Filters__wrapper: {
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  filter: {
    "&:hover": {
      color: "hsl(280, 87%, 75%)",
    },
  },
  input: {
    display: "none",
  },

  todos__left: {
    fontSize: ".8rem",
    color: "#ccc",
  },
  clear: {
    fontSize: ".8rem",
    color: "#ccc",
    "&:hover": {
      color: "hsl(280, 87%, 75%)",
      cursor: "pointer",
    },
  },
};

export default styles;
