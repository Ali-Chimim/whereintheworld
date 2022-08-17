import { Box, Grid } from "@mui/material";
import FilterMenu from "../components/FilterMenu";
import SearchInput from "../components/SearchInput";
import api from "../services/API";
import { useEffect, useState } from "react";
import { Country } from "../domain/Country";
import { CountryAssembler } from "../services/CountryAssembler";
import CountryCard from "../components/CountryCard";

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>();
  const [defaultCountries, setDefaultCountries] = useState<Country[]>();
  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await api.get("/all");
        setCountries(response.data.map(CountryAssembler.assemble));
        setDefaultCountries(response.data.map(CountryAssembler.assemble));
      } catch (error) {
        console.log("my error", error);
      }
    };
    getAllCountries();
  }, []);

  const handleSearchInputChange = (input: string) => {
    if (input === "") {
      setCountries(defaultCountries);
      return;
    }
    const filteredCountries = countries?.filter((country) =>
      country.name.common.includes(input)
    );
    setCountries(filteredCountries);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: { xs: "20px", md: "30px" },
        background: "hsl(0, 0%, 98%)",
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        sx={{ marginBottom: "30px", padding: "0 23px" }}
        container
        alignItems={"center"}
      >
        <Grid item xs={12} sm={6}>
          <SearchInput handleSearchInputChange={handleSearchInputChange} />
        </Grid>
        <Grid item sm={4} />
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            display: "flex",
            justifyContent: { xs: "", sm: "flex-end" },
            marginTop: { xs: "20px", sm: "0" },
          }}
        >
          <FilterMenu />
        </Grid>
      </Grid>

      <Grid container spacing={6} xs={12}>
        {countries?.map((country, idx) => (
          <Grid key={idx} item xs={12} md={3}>
            <CountryCard country={country} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default HomePage;
