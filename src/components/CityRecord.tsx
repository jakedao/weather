import { FaRegTrashAlt, FaSearch } from "react-icons/fa";

import { useWeather } from "../hooks";
import "../styles/CityRecord.scss";

import { IconButton } from "./common";

type TOwnProps = {
  name: string;
  city: string;
};

const CityRecord = (props: TOwnProps) => {
  const { name, city } = props;
  const { handleRemoveCity, handleFetchCity } = useWeather();

  return (
    <div className="city-record">
      <div>{name}</div>
      <div className="city-record__actions">
        <span>{new Date().toLocaleTimeString()}</span>
        <IconButton
          startIcon={<FaSearch />}
          handleClick={() => handleFetchCity({ city })}
        />
        <IconButton
          startIcon={<FaRegTrashAlt />}
          handleClick={() => handleRemoveCity(city)}
        />
      </div>
    </div>
  );
};
export default CityRecord;
