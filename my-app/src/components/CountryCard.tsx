import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";
import { Country } from "../domain/Country";

interface ICountryCardProps {
  country?: Country;
  isLoading?: boolean;
}
const CountryCard = (props: ICountryCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "5px",
        height: "320px",
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
        {!props.isLoading ? (
          <img
            src={props.country?.flags.png}
            style={{
              width: "100%",
              height: "140px",
              borderRadius: "5px 5px 0px 0px ",
              marginBottom: "20px",
            }}
            alt="flag"
          />
        ) : (
          <Skeleton variant={"rectangular"} width={"100%"} height={"140px"} />
        )}
        {!props.isLoading ? (
          <Box sx={{ padding: "0 10px" }}>
            <Typography
              sx={{
                fontWeight: 700,
                marginBottom: "10px",
                fontSize: "16px",
              }}
            >
              {props.country?.name.common}
            </Typography>

            <Box display={"flex"}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Population:
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  marginBottom: "5px",
                  marginLeft: "2px",
                }}
              >
                {props.country?.population}
              </Typography>
            </Box>
            <Box display={"flex"}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Region:
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "5px",
                  marginLeft: "2px",
                }}
              >
                {props.country?.region}
              </Typography>
            </Box>
            <Box display={"flex"}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Capital:
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "5px",
                  marginLeft: "2px",
                }}
              >
                {props.country?.capital ? props.country?.capital[0] : undefined}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={{ padding: "10px" }}>
            <Skeleton variant={"text"} width={"80%"} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CountryCard;
