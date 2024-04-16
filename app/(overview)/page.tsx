import CountryCard from "@/app/ui/CountryCard";
import { getCountries } from "../lib/getCountries";

export default async function Home() {
  const countries = await getCountries();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16">
      {
        countries.map((country) => (
          <CountryCard 
            key={country.name.common}
            name={country.name.common}
            rusName={country.translations.rus.common}
            flag={country.flags.svg}
            flagAlt={country.flags.alt}
          />
        ))
      }
    </section>
  );
}
