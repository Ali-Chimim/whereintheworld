import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const NavBar = () => {
  const { isDark, switchTheme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 0,
        zIndex: 10,
      }}
    >
      <AppBar
        sx={{ backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "white" }}
        position="static"
      >
        <Toolbar
          sx={{
            color: isDark ? "white" : "black",
            boxShadow: " 0 0 15px rgb(0 0 0 /0.1);",
            padding: { xs: "0px 43px", md: "0px 53px" },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Where in the world ?
          </Typography>
          <IconButton onClick={switchTheme}>
            <DarkModeOutlinedIcon
              sx={{
                marginRight: "5px",
                width: "17px",
                height: "17px",
                color: isDark ? "white" : "black",
              }}
            />
            <Typography
              variant="subtitle2"
              component="div"
              sx={{ flexGrow: 1, color: isDark ? "white" : "black" }}
            >
              Dark Mode
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
