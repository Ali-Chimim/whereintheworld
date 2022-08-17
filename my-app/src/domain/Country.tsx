import { name } from "../services/CountryResponse";

export class Country {
  flags: any;
  borders: string[];
  capital: string[];
  name: name;
  population: number;
  region: string;
  subRegion: string;
  topLevelDomain: string[];
  currencies: any;
  languages: any;

  constructor(
    flags: any,
    borders: string[],
    capital: string[],
    name: name,
    population: number,
    region: string,
    subRegion: string,
    topLevelDomain: string[],
    currencies: any,
    languages: any
  ) {
    this.flags = flags;
    this.borders = borders;
    this.capital = capital;
    this.name = name;
    this.population = population;
    this.region = region;
    this.subRegion = subRegion;
    this.topLevelDomain = topLevelDomain;
    this.currencies = currencies;
    this.languages = languages;
  }
}
