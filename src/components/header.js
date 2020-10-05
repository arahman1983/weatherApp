import React, { useEffect, useState, useContext } from "react";
import { SearchInput } from "../utilities";
import { CityContext } from "../context/cityContext";
import {getBackground} from '../apis';

export default function AppHeader() {
  const [today, setToday] = useState("");
  const { cityTemp, selectedCity } = useContext(CityContext);
  const [background, setBackground] = useState('images/defaultBg.jpg');

  useEffect(() => {
    let currDate = new Date();
    setToday(currDate.toLocaleString());
  }, []);

  useEffect(() => {
    selectedCity && getBackground(selectedCity.name).then(data => setBackground(data))
  }, [selectedCity])

  return (
    <div className="app-header" style={{backgroundImage: `url(${background})`}}>
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
              <img src={`http://openweathermap.org/img/w/${cityTemp.weather[0].icon}.png`} width="70" alt={cityTemp} />
              {/* <FontAwesomeIcon className="temp-icon" icon={faSun} /> */}
              <p className="">{cityTemp.weather[0].description }</p>
              </>
            )
          }
        </div>
      </div>
      <SearchInput />
    </div>
  );
}
