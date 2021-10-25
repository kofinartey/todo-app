const styles = {
  TodoList: {
    width: "100%",
    zIndex: "1",
    // marginTop: "1rem",
  },
  list: {
    backgroundColor: "white",
    borderRadius: "5px",
    maxHeight: "20rem",
    overflowY: "scroll",
    position: "relative",
    // boxShadow: "0px 10px 20px 7px rgba(0,0,0,0.05)",
    transition: "all .3s ease-in-out",
    "&::-webkit-scrollbar": {
      width: ".3rem",
      borderRadius: ".5rem",
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      backgroundColor: "hsl(280, 87%, 70%)",
    },
  },
  statusBar: {
    width: "100%",
    fontSize: ".8rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    borderRadius: "0 0 5px 5px",
    // boxShadow: "0px 10px 20px 7px rgba(0,0,0,0.05)",

    "& p:nth-of-type(2):hover": {
      color: "hsl(280, 87%, 75%)",
      cursor: "pointer",
    },
  },

  "@media(min-width: 48rem)": {
    list: {
      maxHeight: "25rem",
    },
    statusBar: {
      display: "none",
    },
  },
};

export default styles;
