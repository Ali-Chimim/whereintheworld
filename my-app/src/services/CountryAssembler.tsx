import { Country } from "../domain/Country";
import { CountryResponse } from "./CountryResponse";

export class CountryAssembler {
  public static assemble(response: CountryResponse) {
    return new Country(
      response.borders,
      response.capital,
      response.name,
      response.population,
      response.region,
      response.subRegion,
      response.topLevelDomain,
      response.currencies,
      response.languages
    );
  }
}
