import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Outfit", "cursive"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ overflowX: "hidden" }}>
        <NavBar />
        <HomePage />
      </Box>{" "}
    </ThemeProvider>
  );
}

export default App;
