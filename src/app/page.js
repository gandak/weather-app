"use client";
import { useState } from "react";
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";
import { Background } from "./components/Background";
import { useGetData } from "./utils/useGetData";
import { useGetWeatherData } from "./utils/useGetWeatherData";
import { getDateToday } from "./utils/getDateToday";

export default function Home() {
  const [searched, setSearched] = useState({});
  const [selectedCity, setSelectedCity] = useState("Ulan Bator");
  const [searchInput, setSearchInput] = useState("");

  const cities = useGetData();
  const weatherData = useGetWeatherData(selectedCity);
  const formattedDate = getDateToday();

  const searchHandler = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchInput(e.target.value.toLowerCase());

    if (search === "") {
      setSearched([]);
      return;
    }

    const filtered = cities.filter((city) => {
      const city1 = city.city;

      return city1.toLowerCase().includes(search);
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
        searchHandler={searchHandler}
        searched={searched}
        selectCity={selectCity}
        searchInput={searchInput}
        city={selectedCity}
        date={formattedDate}
        weather={weatherData.day}
      />
      <RightSide
        city={selectedCity}
        date={formattedDate}
        weather={weatherData.night}
      />
    </div>
  );
}
