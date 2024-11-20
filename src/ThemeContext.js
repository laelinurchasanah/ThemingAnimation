// src/ThemeContext.js
import React, { createContext, useContext, useState } from "react";
import { css } from '@emotion/react';


// Definisikan tema
const themes = {
  dark: {
    background: "black",
    color: "white",
    borderColor: "white",
  },
  light: {
    background: "white",
    color: "black",
    borderColor: "black",
  },
};
// Reusable styles for colors
const redText = css`
  color: #f556b3;
`;
// Title and Subtitle styles
export const titleStyle = css`
  ${redText};
  font-size: 30px;
  font-weight: bold;
`;

// Buat konteks tema
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.dark ? themes.light : themes.dark));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
