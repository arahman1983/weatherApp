import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cities from "../data/cities.json";

export default function SearchInput() {
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const searchTxtChange = (e) => {
    let searchValue = e.target.value.toLowerCase();
    if (searchValue.length >= 3) {
      setFilteredCities(cities.filter((city) => city.name.toLowerCase().indexOf(searchValue) >= 0));
    } else {
      setFilteredCities([]);
    }
    setSearchTxt(e.target.value);
  };

  const completeCityName = (city) => {
    setSearchTxt(`${city.name}, ${city.country}`);
    setFilteredCities([]);
  };

  return (
    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={searchTxtChange} value={searchTxt} placeholder="City Search" />
        <div className="input-group-append">
          <span className="input-group-text">
            <FontAwesomeIcon className="list-icon" icon={faSearch} />
          </span>
        </div>
      </div>
      {filteredCities.length > 0 && (
        <ul className="select-city">
          {filteredCities.map((city, index) => (
            <li key={index} onClick={() => completeCityName(city)}>
              <div className="city">{city.name}</div>
              <div className="country">{city.country}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
