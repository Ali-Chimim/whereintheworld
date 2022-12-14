import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface IFilterMenu {
  handleRegionChange: (region: string) => void;
}

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const FilterMenu = (props: IFilterMenu) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterMenuText, setFilterMenuText] = useState("Filter by Region");
  const openMenu = Boolean(anchorEl);
  const { isDark } = useContext(ThemeContext);
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleRegionClick = (region: string) => {
    setFilterMenuText(region);
    setAnchorEl(null);
    props.handleRegionChange(region);
  };
  return (
    <Box>
      <Button
        variant="contained"
        id="demo-positioned-button"
        aria-controls={"demo-positioned-menu"}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleClick}
        sx={{
          padding: "12px",
          width: "170px",
          whiteSpace: "nowrap",
          textTransform: "none",
          backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "white",
          color: isDark ? "white" : "hsl(200, 15%, 8%)",
          boxShadow: " 0 0 15px rgb(0 0 0 /0.1);",
          "&:hover": {
            border: "none",
            background: "none",
          },
        }}
        endIcon={<KeyboardArrowDownIcon sx={{ marginLeft: "20px" }} />}
      >
        {filterMenuText}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            width: "170px",
            backgroundColor: isDark ? "hsl(209, 23%, 22%)" : "white",
            color: isDark ? "white" : "hsl(200, 15%, 8%)",
          },
        }}
      >
        {REGIONS.map((region, idx) => (
          <MenuItem key={idx} onClick={() => handleRegionClick(region)}>
            <Typography sx={{ fontSize: "14px" }}>{region}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default FilterMenu;
