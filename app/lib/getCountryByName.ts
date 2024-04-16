import { Country } from "./countryTypes";

export async function getCountryByName(name: string): Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    const country = await response.json();
    return country[0];
}