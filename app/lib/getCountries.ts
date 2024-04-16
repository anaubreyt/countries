import { Country } from "./countryTypes";

export async function getCountries(): Promise<Country[]> {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
}