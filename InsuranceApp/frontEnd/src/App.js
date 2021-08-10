import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./Components/NavBar";
import Axios from 'axios';
function App() {
    return (
      <Router>
            <div className="App">
                <NavBar/>
            Hello world
     </div>
            </Router>
  );
}

export default App;
