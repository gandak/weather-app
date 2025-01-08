"use client";
import { useState } from "react";

export const LeftSide = ({
  city,
  searchHandler,
  searched,
  selectCity,
  searchInput,
  date,
  day,
  conditionDay,
  // weather,
}) => {
  function getWeatherIcon(conditionDay) {
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
  }

  return (
    <div className="flex justify-center w-1/2  h-screen ">
      <div className="relative flex flex-col justify-center items-end w-[520px] h-screen pt-10">
        <img
          src="/sun.svg"
          alt=""
          className="absolute z-0 top-[80px] left-[20px]"
        />

        <div className="z-[120] border-2 border-black rounded-full border-none w-[519px] overflow-hidden">
          <div className="absolute top-[40px] flex bg-white rounded-full px-6 py-4 w-full">
            <div className=" w-10 h-10 flex justify-center items-center pl-1 z-10">
              <img src="/search.svg" alt="" className=" ml-1" />
            </div>
            <div className="flex w-full">
              <input
                type="text"
                name=""
                value={searchInput}
                placeholder="Search"
                id=""
                onChange={searchHandler}
                className="w-full rounded-3xl  border-none focus:outline-none pl-1 z-[100] focus:placeholder-white"
              />
            </div>
          </div>

          {searched.length > 0 && (
            <div className="top-[120px] z-[230]  bg-white/90 p-10 absolute z-10 w-full rounded-3xl flex flex-col items-start">
              {searched.slice(0, 5).map((city, index) => (
                <button key={index} onClick={() => selectCity(city)}>
                  <div className="flex items-center">
                    <img src="/location.svg" /> {city}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="z-0 flex h-4/5 flex-col gap-10 w-[414px] bg-gradient-to-t from-white to-white/1  rounded-3xl z-10 overflow-hidden shadow-md">
          <div className="backdrop-blur-sm">
            <div className="flex pl-[40px] pt-[56px]">
              <div>
                <p className="date text-[#9CA3AF]">{date}</p>
                <div className="text-5xl font-bold">{city}</div>
              </div>
              <img src="/location.svg" alt="" />
            </div>
            <div className="flex justify-center">
              <img
                src={getWeatherIcon(conditionDay)}
                alt=""
                className="w-[262px] h-[262px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div>
              <p className="text-[140px] font-extrabold bg-gradient-to-t from-white to-black text-transparent bg-clip-text">
                {day}
              </p>
              <p className="text-[#FF8E27] font-bold">{conditionDay}</p>
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
  );
};
