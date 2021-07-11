const styles = {
  TodoList: {
    width: "100%",
    zIndex: "1",
    // marginTop: "1rem",
  },
  list: {
    backgroundColor: "white",
    borderRadius: "5px",
    maxHeight: "28rem",
    overflowY: "scroll",
    position: "relative",
    boxShadow: "0px 10px 20px 7px rgba(0,0,0,0.05)",
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
};

export default styles;
