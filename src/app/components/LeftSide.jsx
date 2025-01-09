"use client";
import { useState } from "react";
import { getWeatherIcon } from "../utils/getWeatherIcon";

export const LeftSide = ({ city, date, weather }) => {
  return (
    <div className="flex justify-center w-1/2  h-screen ">
      <div className="relative flex flex-col justify-center items-end w-[520px] h-screen">
        <img
          src="/sun.svg"
          alt=""
          className="absolute z-0 top-[80px] left-[20px]"
        />

        <div className="z-0 flex h-5/6 flex-col gap-10 w-[414px] bg-gradient-to-t from-white to-white/1 justify-center rounded-3xl z-10 overflow-hidden shadow-md">
          <div className="backdrop-blur-sm">
            <div className="flex pl-[40px]">
              <div>
                <p className="date text-[#9CA3AF]">{date}</p>
                <div className="text-5xl font-bold">{city}</div>
              </div>
              <img src="/location.svg" alt="" />
            </div>
            <div className="flex justify-center">
              <img
                src={getWeatherIcon(weather.conditionDay)}
                alt=""
                className="w-[262px] h-[262px]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="w-full flex flex-col items-center">
              <p className="text-[140px] font-extrabold bg-gradient-to-t from-white to-black text-transparent bg-clip-text">
                {weather.maxTemp}
              </p>
              <p className="text-[#FF8E27] font-bold">{weather.conditionDay}</p>
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
