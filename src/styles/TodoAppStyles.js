import mobileLight from "../images/bg-mobile-light.jpg";
// import mobileDark from "../images/bg-mobile-dark.jpg";
import desktopLight from "../images/bg-desktop-light.jpg";
// import desktopDark from "../images/bg-desktop-dark.jpg";

const styles = {
  TodoApp: {
    // backgroundColor: ",
    // backgroundColor: {!isDark? "#FAFAFA":},
    height: "100vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  TodoApp__header: {
    width: "100%",
    height: "13.75rem",
    backgroundImage: `url(${mobileLight})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    top: "0",
    // zIndex: "1",
    display: "flex",
    justifyContent: "center",
  },
  TodoApp__wrapper: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "4rem",
    zIndex: "1",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    color: "white",
    fontSize: "1.5rem",
    letterSpacing: ".5rem",
    "& + img": {
      width: "1.5rem",
      height: "1.5rem",
    },
  },

  "@media(min-width: 64rem)": {
    TodoApp__header: {
      backgroundImage: `url(${desktopLight})`,
    },
    TodoApp__wrapper: {
      width: "40%",
    },
  },
};

export default styles;
