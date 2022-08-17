export type name = {
  common: string;
};
export interface CountryResponse {
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
}
