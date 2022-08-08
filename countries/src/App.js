import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Outfit", "cursive"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          color="transparent"
          position="static"
          sx={{ padding: "0px 15px" }}
        >
          <Toolbar>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 700 }}
            >
              Where in the world ?
            </Typography>
            <IconButton>
              <DarkModeOutlinedIcon
                sx={{
                  marginRight: "5px",
                  width: "17px",
                  height: "17px",
                  color: "black",
                }}
              />
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
              >
                Dark Mode
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
