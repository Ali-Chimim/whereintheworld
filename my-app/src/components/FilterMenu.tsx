import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const REGIONS = ["Africa", "America", "Asie", "Europe", "Oceania"];
const FilterMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
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
          padding: "10px",
          width: "max-content",
          whiteSpace: "nowrap",
          textTransform: "none",
          backgroundColor: "white",
          color: "black",
          boxShadow: " 0 0 15px rgb(0 0 0 /0.1);",
          "&:hover": {
            border: "none",
            background: "none",
          },
        }}
        endIcon={<KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />}
      >
        Filter by Region
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
            width: "151px",
          },
        }}
      >
        {REGIONS.map((region) => (
          <MenuItem onClick={() => setAnchorEl(null)}>
            <Typography sx={{ fontSize: "14px" }}>{region}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default FilterMenu;