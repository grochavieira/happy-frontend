import React, { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import usePersistedState from "./utils/usePersistedState";
import { AuthProvider } from "./contexts/auth";

import Routes from "./routes";
import "leaflet/dist/leaflet.css";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes toggleTheme={toggleTheme} />
          <ToastContainer />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
