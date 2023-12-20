import { NO_QUERIES } from "../constants";
import { useWeather } from "../hooks";

import CityRecord from "./CityRecord";

const SearchHistory = () => {
  const { searchHistory } = useWeather();

  if (!searchHistory.length) return <h3>{NO_QUERIES}</h3>;

  return (
    <div>
      <h3>Search History</h3>
      <hr />
      {searchHistory.map(({ name, country }, index) => (
        <CityRecord
          key={country}
          city={name}
          name={`${index + 1}. ${name}, ${country}`}
        />
      ))}
    </div>
  );
};
export default SearchHistory;
