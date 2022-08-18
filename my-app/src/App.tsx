import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/material";
import ThemeContextProvider from "./context/ThemeContext";

const theme = createTheme({
  typography: {
    fontFamily: ["Outfit", "cursive"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContextProvider>
        <Box sx={{ overflowX: "hidden" }}>
          <NavBar />
          <HomePage />
        </Box>
      </ThemeContextProvider>
    </ThemeProvider>
  );
}

export default App;
