"use client";
import { useState } from "react";
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";
import { Background } from "./components/Background";
import { useGetData } from "./hooks/useGetData";
import { useGetWeatherData } from "./hooks/useGetWeatherData";
import { getDateToday } from "./utils/getDateToday";
import { Input } from "./components/Input";

export default function Home() {
  const [searched, setSearched] = useState({});
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
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
    <div className="bg-[#F9FAFB] flex w-screen h-screen">
      <Background />
      <div className="w-1/2 bg-[#F9FAFB] flex justify-center items-center">
        <LeftSide
          city={selectedCity}
          date={formattedDate}
          weather={weatherData.day}
        />
        <Input
          searchHandler={searchHandler}
          searched={searched}
          selectCity={selectCity}
          searchInput={searchInput}
        />
      </div>
      <div className="bg-[url('/curvedbg.svg')] bg-cover bg-center w-1/2 text-white flex justify-center items-center ">
        <RightSide
          city={selectedCity}
          date={formattedDate}
          weather={weatherData.night}
        />
      </div>
    </div>
  );
}
