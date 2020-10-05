import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app-style.css";
import { AppHeader, NavBarComp } from "./components";
import { CityContext } from "./context/cityContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router/routesComp";
import { getCurrentTemp } from "./apis";
import cites from "./data/cities.json";

function App() {
  const [selectedCity, setSelectedCity] = useState();
  const [cityTemp, setCityTemp] = useState({});

  function getlocation() {
    navigator.geolocation.getCurrentPosition(showLoc);
  }
  
  function showLoc(pos) {
    let locLat = pos.coords.latitude.toFixed(2);
    let locLon = pos.coords.longitude.toFixed(2);
    // eslint-disable-next-line array-callback-return
    setSelectedCity(cites.filter(item=> {
      let latDiff = Math.abs( item.lat - locLat )
      let lonDiff = Math.abs( item.lng - locLon )
      if(latDiff <=0.1 && lonDiff <=0.1){
        return item
      }  
    })[0])
  }

  useEffect(() => {
    selectedCity &&
      getCurrentTemp(selectedCity.name).then((data) => {
        setCityTemp(data);
      });
  }, [selectedCity]);

  useEffect(() => {
    getlocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page-bg">
      <div className="col-lg-4 col-md-6 app-container">
        <CityContext.Provider value={{ selectedCity, setSelectedCity, cityTemp }}>
          <Router>
            <AppHeader />
            <NavBarComp />
            <AppRoutes />
          </Router>
        </CityContext.Provider>
      </div>
    </div>
  );
}

export default App;
