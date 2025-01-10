import { ButtonsSearched } from "./ButtonsSearched";

export const Input = ({ searchHandler, searched, selectCity, searchInput }) => {
  return (
    <div className="absolute top-[40px]  z-[130]">
      <div className="z-[120] border-2 border-black rounded-full border-none w-[519px] overflow-hidden bottom-0">
        <div className="top-[40px] flex bg-white rounded-full px-6 py-4 w-full ">
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
              className="w-full rounded-3xl text-[20px] font-bold  border-none focus:outline-none pl-1 z-[100] focus:placeholder-white"
            />
          </div>
        </div>

        {searched.length && (
          <div className="top-[80px] z-[230]  bg-white/90 p-10 absolute z-10 w-full rounded-3xl flex flex-col items-start">
            {searched.slice(0, 5).map((country, index) => (
              <ButtonsSearched
                index={index}
                cityName={country.city}
                countryName={country.country}
                selectCity={selectCity}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
