import { use, useEffect, useState } from "react";

export function useGetData() {
  const [cities, setCities] = useState([]);

  const getCountries = async () => {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();

    let incomeCities = data.data.map((country) => {
      let cityWithCountry = country.cities.map((arr) => {
        return { country: country.country, city: arr };
      });

      return cityWithCountry;
    });

    incomeCities = incomeCities.flat();

    setCities(incomeCities);
    console.log(incomeCities);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return cities;
}