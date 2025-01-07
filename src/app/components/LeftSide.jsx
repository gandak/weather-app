"use client";
import { useState } from "react";

export const LeftSide = () => {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat().tolow;
    setCities(incomeCities);
  }
  getData();

  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };

  return (
    <div className="flex justify-center w-1/2 bg-[#F9FAFB] h-screen p-10">
      <div className="relative flex flex-col  items-end w-3/4">
        <img
          src="/sun.svg"
          alt=""
          className="absolute z-0 top-0 left-[-20px]"
        />
        <div className="border-2 border-black w-full rounded-full border-none w-[519px] z-10 overflow-hidden">
          <div className="flex bg-white rounded-full px-6 py-4">
            <div className="w-10 h-10 flex justify-center items-center pl-1 z-10">
              <img src="/search.svg" alt="" className=" ml-1" />
            </div>
            <div className="flex">
              <input
                type="text"
                name=""
                placeholder="Search"
                id=""
                onChange={searchHandler}
                className="w-full rounded-3xl  border-none focus:outline-none pl-1 z-10"
              />
            </div>
          </div>
          {/* <div className="bg-white p-10 absolute z-0 w-full">
            {searched.length > 0 &&
              searched.slice(0, 5).map((city) => <p>{city}</p>)}
          </div> */}
        </div>

        <div className="flex h-5/6 flex-col gap-10 w-[414px] bg-gradient-to-t from-white to-white/1 h-3/4 rounded-3xl z-10 overflow-hidden shadow-md">
          <div className="backdrop-blur-sm">
            <div className="flex pl-[40px] pt-[56px]">
              <div>
                <p className="date text-[#9CA3AF]">January 7, 2025</p>
                <div className="text-5xl font-bold">Ulaanbaatar</div>
              </div>
              <img src="/location.svg" alt="" />
            </div>
            <div className="flex justify-center">
              <img src="/bigsun.svg" alt="" className="w-[262px] h-[262px]" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div>
              <p className="text-[140px] font-extrabold bg-gradient-to-t from-white to-black text-transparent bg-clip-text">
                -11.3°
              </p>
              <p className="text-[#FF8E27] font-bold">Bright</p>
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

// border-muted-foreground/20
