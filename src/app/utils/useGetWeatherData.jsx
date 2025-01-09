import { use, useEffect, useState } from "react";

export function useGetWeatherData(selectedCity) {
  const [weatherData, setWeatherData] = useState({
    day: {
      maxTemp: "",
      conditionDay: "",
    },
    night: {
      minTemp: "",
      conditionNight: "",
    },
  });

  const getWeatherData = async (city) => {
    const weatherResult = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=ddf552dacd5849929eb122216250601&q=${city}`
    );
    const weatherDataRaw = await weatherResult.json();

    let dayTemp = weatherDataRaw.forecast.forecastday[0].day.maxtemp_c;
    let nightTemp = weatherDataRaw.forecast.forecastday[0].day.mintemp_c;

    let conditionDayText =
      weatherDataRaw.forecast.forecastday[0].day.condition.text;
    let conditionNightText =
      weatherDataRaw.forecast.forecastday[0].hour[23].condition.text;

    setWeatherData({
      day: { maxTemp: dayTemp, conditionDay: conditionDayText },
      night: { minTemp: nightTemp, conditionNight: conditionNightText },
    });
  };

  useEffect(() => {
    getWeatherData(selectedCity);
  }, [selectedCity]);

  return weatherData;
}
