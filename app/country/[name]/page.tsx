import Link from "next/link";
import Image from "next/image";

import { getCountryBorderByName } from "@/app/lib/getCountryBorderByName";
import { getCountryByName } from "@/app/lib/getCountryByName";

import CountryCard from "@/app/ui/CountryCard";
import { BackButton } from "@/app/ui/BackButton";
  
export default async function CountryDetail({
    params: {name}
}: {
    params: {name :string}
}) {
    const country = await getCountryByName(name);
    const borderCountries = await getCountryBorderByName(decodeURI(name));
    const formatter = Intl.NumberFormat("rus", {notation: "compact"});
       return(
        <section className="flex flex-col container">
            <BackButton />
            <h1 className="text-5xl font-bold text-center text-gray-800 my-5">{country.translations.rus.official}</h1>
            <article className="flex  md:flex-row flex-col justify-between min-w-full p-10 bg-white rounded-xl">
                <section>
                    {
                        country.capital && (
                            <h2 className="text-xl text-gray-800 mt-3">
                                <b>🏙️ Столица: </b>
                                {" "}
                                {country.capital}
                            </h2>
                        )
                    }
                    {
                        country.region && (
                            <h2 className="text-xl text-gray-800 mt-3">
                                <b>🗺️ Регион: </b>
                                {country.region} {country.subregion && `- ${country.subregion}`}
                            </h2>
                        )
                    }
                    {
                        country.population && (
                            <h2 className="text-xl text-gray-800 mt-3">
                                <b>👨‍👩‍👧‍👦 Население: </b>
                                {formatter.format(country.population)}
                            </h2>
                        )
                    }
                    {
                        country.languages && (
                             <h2 className="text-xl text-gray-800 mt-3">
                                <b>🗣️ Язык: </b>
                                {
                                    Object.values(country.languages).map((language) => (
                                        <span 
                                            key={language}
                                            className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-full"
                                        >
                                            {language}
                                        </span>
                                    ))
                                }
                            </h2>
                        )
                    }
                   
                </section>
            <div className="relative h-48 my-2 w-auto md:h-auto md:w-96 shadow-md md:order-last order-first">
                <Image 
                    src={country.flags.svg} 
                    alt={country.flags.alt} 
                    fill 
                />
            </div>
            </article>
            {
                borderCountries.length ? (
                    <section>
                        <h3 className="mt-12 text-2xl font-semibold text-gray-800">
                            Соседние страны
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16">
                            {
                                borderCountries.map((border) => (
                                        <CountryCard key={border.name} {...border} />
                                ))
                            }
                        </div>
                    </section>
                ) : ''
            }
        </section>
    )
}