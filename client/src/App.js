import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DispatcherWrapper from "./Dipatcher/Wrapper";
import MedicWrapper from "./Medic/Wrapper/Wrapper";
import Login from "./loginPage";
import { MedicDispatchProvider } from "./utils/MedicDispatchContext";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./DarkTheme/useDarkMode";
import { GlobalStyles } from "./DarkTheme/GlobalStyles";
import { lightTheme, darkTheme } from "./DarkTheme/Themes";
import Toggle from "./DarkTheme/Toggler";
// import "./App.css";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  /////stateful
  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <MedicDispatchProvider>
          <BrowserRouter>
            <Route path="/dispatcher" exact component={DispatcherWrapper} />

            <Route path="/medical" exact component={MedicWrapper} />

            <Route path="/" exact component={Login} />

            {/* <Route path="*" exact component={} /> */}
          </BrowserRouter>
        </MedicDispatchProvider>
      </>
    </ThemeProvider>
  );
};

export default App;
