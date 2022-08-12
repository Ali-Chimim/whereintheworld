export class Country {
  borders: string[];
  capital: string[];
  name: any;
  population: number;
  region: string;
  subRegion: string;
  topLevelDomain: string[];
  currencies: any;
  languages: any;

  constructor(
    borders: string[],
    capital: string[],
    name: any,
    population: number,
    region: string,
    subRegion: string,
    topLevelDomain: string[],
    currencies: any,
    languages: any
  ) {
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
