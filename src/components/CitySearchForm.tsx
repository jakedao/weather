import { useState } from "react";

import { NOT_FOUND_CITY } from "../constants";
import { useWeather } from "../hooks";
import "../styles/CitySearchForm.scss";

import { TextField } from "./common";
import ErrorMessage from "./common/ErrorMessage";

type TSearchFormState = {
  city: string;
  country: string;
};

// Using for asign initial values and clear form
const initialSearchState: TSearchFormState = {
  city: "",
  country: "",
};

const SearchForm = () => {
  const { isNoCityFound, isFetchingWeather, handleFetchCity } = useWeather();

  const [searchValues, setSearchValues] =
    useState<TSearchFormState>(initialSearchState);

  const handleClearBtn = () => {
    setSearchValues(initialSearchState);
  };

  const handleSearchBtn = () => {
    handleFetchCity({ city: searchValues.city, country: searchValues.country });

    setSearchValues(initialSearchState);
  };

  return (
    <>
      <div className="form">
        <TextField
          label="City"
          value={searchValues.city}
          onChange={(e) =>
            setSearchValues((prev) => ({ ...prev, city: e.target.value }))
          }
        />
        <TextField
          label="Country"
          value={searchValues.country}
          onChange={(e) =>
            setSearchValues((prev) => ({ ...prev, country: e.target.value }))
          }
        />

        {isFetchingWeather ? (
          <div>FETCHING...</div>
        ) : (
          <>
            <button
              onClick={handleSearchBtn}
              disabled={!searchValues.city && !searchValues.country}
            >
              Search
            </button>
            <button onClick={handleClearBtn}>Clear</button>
          </>
        )}
      </div>

      {isNoCityFound && <ErrorMessage message={NOT_FOUND_CITY} />}
    </>
  );
};
export default SearchForm;
