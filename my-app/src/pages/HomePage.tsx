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
  const [region, setRegion] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await api.get("/all");
        setCountries(response.data.map(CountryAssembler.assemble));
        setDefaultCountries(response.data.map(CountryAssembler.assemble));
        setIsLoading(false);
      } catch (error) {
        console.log("my error", error);
      }
    };
    getAllCountries();
  }, []);

  const handleSearchInputChange = async (input: string) => {
    if (region) {
      if (!input) {
        const filteredCountries = defaultCountries?.filter(
          (country) => country.region === region
        );
        setCountries(filteredCountries);
        return;
      }
      const response = await api.get(`/name/${input}`);
      const countries = response.data.map(
        CountryAssembler.assemble
      ) as Country[];
      setCountries(countries?.filter((country) => country.region === region));
    } else {
      if (!input) {
        setCountries(defaultCountries);
        return;
      }
      const response = await api.get(`/name/${input}`);
      setCountries(response.data.map(CountryAssembler.assemble));
    }
    setSearchInput(input);
  };

  const handleRegionChange = async (region: string) => {
    const response = await api.get(`/region/${region}`);
    const countries = response.data.map(CountryAssembler.assemble) as Country[];
    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
      setCountries(filteredCountries);
    } else {
      setCountries(countries);
    }
    setRegion(region);
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
          <FilterMenu handleRegionChange={handleRegionChange} />
        </Grid>
      </Grid>

      <Grid container spacing={6} xs={12}>
        {isLoading ? (
          <>
            {Array.from(new Array(8)).map((element) => (
              <Grid item xs={12} md={3}>
                <CountryCard isLoading />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {countries?.map((country, idx) => (
              <Grid key={idx} item xs={12} md={3}>
                <CountryCard country={country} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};
export default HomePage;
