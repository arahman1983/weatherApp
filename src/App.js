import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app-style.css";
import {AppHeader} from './components'

function App() {
  return (
    <div className="page-bg">
      <div className="col-lg-4 col-md-6 app-container">
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
