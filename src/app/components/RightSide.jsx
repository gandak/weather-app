"use client";

export const RightSide = ({ city, date, weather }) => {
  function getWeatherIcon(conditionNight) {
    const condition = conditionNight.toLowerCase();

    switch (true) {
      case condition.includes("clear"):
        return "/bigmoon.svg";
      case condition.includes("rain"):
        return "/weatherIcons/nightRainy.svg";
      case condition.includes("cloud"):
        return "/weatherIcons/nightCloudy.svg";
      case condition.includes("snow"):
        return "/weatherIcons/nightSnowy.svg";
      case condition.includes("nightThunder"):
        return "/weatherIcons/thunder.svg";
      case condition.includes("wind"):
        return "/weatherIcons/nightWindy.svg";
      default:
        return "/bigmoon.svg";
    }
  }

  return (
    <div className=" bg-center bg-cover bg-no-repeat w-1/2 flex justify-center items-center h-screen">
      <div className="w-[520px] flex items-center h-full z-[130]">
        <div className="relative h-5/6 flex items-center">
          <img
            src="/moon.svg"
            alt=""
            className="absolute z-0 bottom-[-60px] right-[-80px]"
          />
          <div className="flex flex-col justify-center gap-10 w-[414px] backdrop-blur-sm  rounded-3xl z-[101] overflow-hidden shadow-md h-full">
            <div>
              <div className="flex pl-[40px] pt-[0px] ">
                <div>
                  <p className="date text-[#9CA3AF]">{date}</p>
                  <div className="text-5xl text-white font-bold">{city}</div>
                </div>
                <img src="/location.svg" alt="" />
              </div>
              <div className="flex justify-center">
                <img
                  src={getWeatherIcon(weather.conditionNight)}
                  alt=""
                  className="w-[262px] h-[262px]"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="w-full flex flex-col items-center">
                <p className="text-[140px] font-extrabold bg-gradient-to-t from-black to-white text-transparent bg-clip-text">
                  {weather.minTemp}
                </p>
                <p className="text-[#FF8E27] font-bold">
                  {weather.conditionNight}
                </p>
              </div>
              <div className="flex justify-between w-[318px]">
                <img src="/home.svg" alt="" />
                <img src="/location.svg" alt="" />
                <img src="/heart.svg" alt="" />
                <img src="/person.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
