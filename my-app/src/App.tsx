import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

const theme = createTheme({
  typography: {
    fontFamily: ["Outfit", "cursive"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
