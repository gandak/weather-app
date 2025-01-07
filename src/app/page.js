"use client";
import { use, useState } from "react";
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";
import { Background } from "./components/Background";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
  const [searchInput, setSearchInput] = useState("");

  const today = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  // console.log(formattedDate);

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();

    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }
  getData();

  const searchHandler = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchInput(e.target.value.toLowerCase());

    if (search === "") {
      setSearched([]);
      return;
    }

    const filtered = cities.filter((city) => {
      return city.toLowerCase().includes(search);
    });

    setSearched(filtered);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setSearched("");
    setSearchInput("");
  };

  return (
    <div className="flex justify-between bg-[#F9FAFB]">
      <Background />
      <LeftSide
        city={selectedCity}
        searchHandler={searchHandler}
        searched={searched}
        selectCity={selectCity}
        searchInput={searchInput}
        date={formattedDate}
      />
      <RightSide city={selectedCity} date={formattedDate} />
    </div>
  );
}
