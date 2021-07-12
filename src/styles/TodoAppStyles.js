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
    transition: "all .3s ease-in-out",
  },
  TodoApp__header: {
    width: "100%",
    minHeight: "13.75rem",
    height: "37%",
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
    fontSize: "2rem",
    letterSpacing: ".5rem",
    "& + img": {
      width: "2rem",
      height: "2rem",
    },
  },
  "@media(min-width: 48rem)": {
    TodoApp__wrapper: {
      width: "80%",
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
