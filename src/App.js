import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app-style.css";
import {AppHeader, NavBarComp} from './components';
import {CityContext} from './context/cityContext';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './router/routesComp'
import {getCurrentTemp} from './apis'


function App() {
  
  const [selectedCity, setSelectedCity] = useState();
  const [cityTemp, setCityTemp] = useState({})

  useEffect(() => {
    selectedCity && getCurrentTemp(selectedCity.name).then(data=> {
      setCityTemp(data)
    })
  }, [selectedCity])

  return (
    <div className="page-bg">
      <div className="col-lg-4 col-md-6 app-container">
        <CityContext.Provider value={{selectedCity,setSelectedCity, cityTemp}} >
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
