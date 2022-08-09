import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";

const theme = createTheme({
  typography: {
    fontFamily: ["Outfit", "cursive"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
