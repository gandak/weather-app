export const getWeatherIcon = (conditionDay) => {
  const condition = conditionDay.toLowerCase();

  switch (true) {
    case condition.includes("sun"):
      return "bigsun.svg";
    case condition.includes("rain"):
      return "/weatherIcons/rainy.svg";
    case condition.includes("cloud"):
      return "/weatherIcons/cloudy.svg";
    case condition.includes("snow"):
      return "/weatherIcons/snowy.svg";
    case condition.includes("thunder"):
      return "/weatherIcons/thunder.svg";
    case condition.includes("wind"):
      return "/weatherIcons/wind.svg";
  }
};
