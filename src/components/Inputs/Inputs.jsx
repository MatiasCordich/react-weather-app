import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";
import {
  Fieldset,
  InputBox,
  InputsBtnBox,
  Search,
  TemperatureBox,
  TemperatureButton,
} from "./InputsElements";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city !== '') {
      setQuery({ q: city })
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({ lat, lon })
      })
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name

    if (units !== selectedUnit) {
      setUnits(selectedUnit)
    }
  }

  return (
    <InputBox>
      <Fieldset>
        <Search
          value={city}
          onChange={handleChangeCity}
          type="text"
          placeholder="Search..."
        />
        <InputsBtnBox>
          <UilSearch
            style={{ cursor: "pointer", color: "#03C988" }}
            onClick={handleSearchClick}
          />
          <UilLocationPoint
            style={{ cursor: "pointer", color: "#03C988" }}
            onClick={handleLocationClick}
          /></InputsBtnBox>

      </Fieldset>
      <TemperatureBox>
        <TemperatureButton
          name="metric"
          onClick={handleUnitsChange}
        > °C</TemperatureButton>
        <p>|</p>
        <TemperatureButton
          name="imperial"
          onClick={handleUnitsChange}
        >°F</TemperatureButton>
      </TemperatureBox>
    </InputBox>
  );
};

export default Inputs;
