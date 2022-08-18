import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

interface ISearchInputProps {
  handleSearchInputChange: (input: string) => void;
}
const SearchInput = (props: ISearchInputProps) => {
  const { isDark } = useContext(ThemeContext);
  const handleInputChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.handleSearchInputChange(event.target.value);
    },
    1000
  );

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", md: "400px" },
        boxShadow: " 0 0 15px rgb(0 0 0 /0.1);",
        backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "white",
      }}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon sx={{ color: isDark ? "white" : "" }} />
      </IconButton>
      <InputBase
        sx={{
          color: isDark ? "white" : " hsl(200, 15%, 8%)",
          input: {
            "&::placeholder": {
              color: isDark ? "white" : " hsl(200, 15%, 8%)",
            },
          },
        }}
        placeholder="Search for a country..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleInputChange}
      />
    </Paper>
  );
};

export default SearchInput;
