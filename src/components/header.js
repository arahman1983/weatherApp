import React, { useEffect, useState, useContext } from "react";
import { SearchInput } from "../utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../context/cityContext";

export default function AppHeader() {
  const [today, setToday] = useState("");
  const { cityTemp } = useContext(CityContext);

  useEffect(() => {
    let currDate = new Date();
    setToday(currDate.toLocaleString());
  }, []);

  return (
    <div className="app-header">
      <div className="row">
        <div className="col-8 pl-4">
          <p className="p-0">{today} </p>
          {cityTemp.main ? (
            <>
              <h1>
                {cityTemp.main.temp} <sup>o</sup>C
              </h1>
              <p>
                feels like {cityTemp.main.feels_like} <sup>o</sup>C
              </p>
            </>
          )
        : <p>Please select city ...</p>
        }
        </div>
        <div className="col-4 icon-cont">
          {
            cityTemp.weather && (
              <>
              <FontAwesomeIcon className="temp-icon" icon={faSun} />
              <p className="my-3">{cityTemp.weather[0].description }</p>
              </>
            )
          }
        </div>
      </div>
      <SearchInput />
    </div>
  );
}
