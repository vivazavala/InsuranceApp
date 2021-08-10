import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./Components/Form";

function App() {
    return (
      <Router>
            <div className="App">
                <Form/>
            Hello world
     </div>
            </Router>
  );
}

export default App;
