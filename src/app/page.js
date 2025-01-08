"use client";
import { use, useEffect, useState } from "react";
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";
import { Background } from "./components/Background";
import { Input } from "./components/Input";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulan Bator");
  const [searchInput, setSearchInput] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [conditionDay, setConditionDay] = useState("");
  const [conditionNight, setConditionNight] = useState("");

  const today = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();

    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }
  useEffect(() => {
    getData();
  }, []);

  async function getWeather(selectedCity) {
    const weatherResult = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=ddf552dacd5849929eb122216250601&q=${selectedCity}`
    );
    const weatherData = await weatherResult.json();

    let dayTemp = weatherData.forecast.forecastday[0].day.maxtemp_c;
    let nightTemp = weatherData.forecast.forecastday[0].day.mintemp_c;

    let conditionDayText =
      weatherData.forecast.forecastday[0].day.condition.text;
    let conditionNightText =
      weatherData.forecast.forecastday[0].hour[23].condition.text;

    console.log(conditionDayText);
    console.log(conditionNightText);

    setMaxTemp(dayTemp);
    setMinTemp(nightTemp);
    setConditionDay(conditionDayText);
    setConditionNight(conditionNightText);
  }
  useEffect(() => {
    getWeather(selectedCity);
  }, []);

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
    getWeather(city);
  };

  return (
    <div className="flex justify-between bg-[#F9FAFB]">
      <Background />
      {/* <Input
        searchHandler={searchHandler}
        searched={searched}
        selectCity={selectCity}
        searchInput={searchInput}
      /> */}
      <LeftSide
        searchHandler={searchHandler}
        searched={searched}
        selectCity={selectCity}
        searchInput={searchInput}
        city={selectedCity}
        date={formattedDate}
        day={maxTemp}
        conditionDay={conditionDay}
      />
      <RightSide
        city={selectedCity}
        date={formattedDate}
        night={minTemp}
        conditionNight={conditionNight}
      />
    </div>
  );
}
