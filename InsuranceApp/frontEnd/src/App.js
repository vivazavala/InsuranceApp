import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom"
import FormPage from "./Components/FormPage";
import phoneRep2 from './addOns/phoneRep2.jpg';
import { jumbostron, Jumbotron, Container} from 'react-bootstrap'

var sectionStyle = {
    backgroundImage: `url(${phoneRep2})`,
    position: 'fixed',
    top: '0',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover', 
}
var headerStyle = {
    color: 'white',
    fontSize: '60px',
    textAlign: 'center'
}
var textStyle = {
    color: 'white',
    fontSize: '20px',
    textAlign: 'center'
}

var leftList ={
    color: 'white',
    fontSize: '25px',
}

var ul = {
    color: 'white',
    fontSize: '35px',
    listStyle: 'inside'
}


function App() {
    return (
      <Router>
            <div className="App" style={sectionStyle}>
               
                <h1 style={headerStyle}>My Phone Wearhouse Inc.</h1>
                <h5 style={textStyle}>Partnered with AIG - We Cover</h5>
                <br></br>
                <br></br>
             
               
                <ul style={ul}>
                    What We Cover?

                    <li style={leftList}>list</li>
                    <li style={leftList}>list</li>
                    <li style={leftList}>list</li>
                    <li style={leftList}>list</li>
                </ul>
                    <FormPage />
                


     </div>
            </Router>
  );
}

export default App;
