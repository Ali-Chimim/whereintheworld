import { Card, CardContent, Grid, Typography } from "@mui/material";
import FilterMenu from "../components/FilterMenu";
import SearchInput from "../components/SearchInput";
import MoroccanFlag from "../assets/images/Flag_of_Morocco.svg.png";

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
        sx={{ width: "100%", marginBottom: "30px" }}
        item
        display="flex"
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        gap={"25px"}
      >
        <SearchInput />
        <FilterMenu />
      </Grid>
      <Card
        variant="outlined"
        sx={{
          width: "240px",
          borderRadius: "5px",
          boxShadow: " 0 0 15px rgb(0 0 0 /0.15);",
          border: 0,
          cursor: "pointer",
          transition: "transform 250ms",
          "&:hover": { transform: "translateY(-10px)" },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <img
            src={MoroccanFlag}
            style={{
              width: "100%",
              borderRadius: "5px 5px 0px 0px ",
              marginBottom: "20px",
            }}
            alt="flag"
          />
          <Typography
            style={{
              fontWeight: 700,
              marginBottom: "10px",
              fontSize: "14px",
            }}
          >
            Morocco
          </Typography>
          <Typography
            variant="caption"
            style={{
              color: "grey",
              marginBottom: "5px",
            }}
          >
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </Typography>
        </CardContent>
      </Card>

      {/* Container of the cards */}
    </Grid>
  );
};
export default HomePage;
