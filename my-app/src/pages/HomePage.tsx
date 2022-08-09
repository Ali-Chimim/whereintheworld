import { Grid } from "@mui/material";
import FilterMenu from "../components/FilterMenu";
import SearchInput from "../components/SearchInput";

const HomePage = () => {
  return (
    <Grid
      sx={{
        width: "100vw",
        padding: { xs: "20px", md: "50px" },
        margin: 0,
        background: "hsl(0, 0%, 98%)",
      }}
      container
    >
      <Grid
        sx={{ width: "100%" }}
        item
        display="flex"
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        gap={"25px"}
      >
        <SearchInput />
        <FilterMenu />
      </Grid>
    </Grid>
  );
};
export default HomePage;
