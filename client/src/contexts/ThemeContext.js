import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDark, setIsDark] = useState(false);

  //fetch theme from local storage
  useEffect(() => {
    const data = localStorage.getItem("isDark");
    setIsDark(JSON.parse(data));
  }, []);
  //store theme in local storage
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  const value = { isDark, setIsDark };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
