import { Country } from "./countryTypes";

export interface BorderCountry {
    name: string;
    rusName: string;
    flag: string;
    flagAlt: string;
}

export async function getCountryBorderByName(name: string): Promise<BorderCountry[]> {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const countries: Country[] = await response.json();

    const country = countries.find((country: Country) => country.name.common === name);

    if (!country || !country.borders) {
        return [];
    }

    return country.borders.map((border: string) => {
        const borderCountry = countries.find((country: Country) => country.cca3 === border);
        if (!borderCountry) {
            return null;
        }
        return {
            name: borderCountry.name.common,
            rusName: borderCountry.translations.rus.common,
            flag: borderCountry.flags.svg,
            flagAlt: borderCountry.flags.alt,
        };
    }).filter(Boolean) as BorderCountry[];
}
