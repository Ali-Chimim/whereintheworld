import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", md: "400px" },
        boxShadow: " 0 0 15px rgb(0 0 0 /0.1);",
      }}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          input: {
            "&::placeholder": {
              color: "black",
            },
          },
        }}
        placeholder="Search for a country..."
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
};

export default SearchInput;
