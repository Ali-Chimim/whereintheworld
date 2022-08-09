import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import SearchInput from "../components/SearchInput";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HomePage = () => {
  return (
    <Grid sx={{ width: "100vw", padding: "50px", margin: 0 }} container>
      <Grid
        item
        sx={{ width: "100%" }}
        display="flex"
        justifyContent={"space-between"}
      >
        <SearchInput />
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              border: "none",
              background: "none",
            },
          }}
          endIcon={<KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />}
        >
          Filter By Region
        </Button>
      </Grid>
    </Grid>
  );
};
export default HomePage;
