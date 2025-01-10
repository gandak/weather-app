export const ButtonsSearched = ({
  index,
  cityName,
  countryName,
  selectCity,
}) => {
  return (
    <button onClick={() => selectCity(cityName)}>
      <div key={cityName} className="flex items-center">
        <img src="/location.svg" />{" "}
        <div className="text-[20px] font-bold">
          {cityName + ", " + countryName}
        </div>
      </div>
    </button>
  );
};
