import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app-style.css";
import {AppHeader, NavBarComp} from './components';
import {CityContext} from './context/cityContext';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './router/routesComp'


function App() {
  
  const [selectedCity, setSelectedCity] = useState({});

  useEffect(() => {
    console.log(selectedCity)
  }, [selectedCity])

  return (
    <div className="page-bg">
      <div className="col-lg-4 col-md-6 app-container">
        <CityContext.Provider value={{selectedCity,setSelectedCity}} >
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
