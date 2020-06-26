import React, { Component, createContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";


const DispatchContext = React.createContext(() => {
    throw new Error("Forgot to wrap component in `ThemeProvider`");
  });
  
  DispatchContext.displayName = "ThemeDispatchContext";
  
  const themeInitialOptions = {
    colors: "DEFAULT"
  };
  
  export function useChangeTheme() {
    const dispatch = React.useContext(DispatchContext);
    return React.useCallback(
      themeOptions => dispatch({ type: "CHANGE", payload: themeOptions }),
      [dispatch]
    );
  }