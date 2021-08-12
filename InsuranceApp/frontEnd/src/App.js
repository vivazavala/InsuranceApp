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
    fontSize: '55px',
    textAlign: 'center'
}
var textStyle = {
    color: 'white',
    fontSize: '18px',
    textAlign: 'center'
}

var leftList ={
    color: 'white',
    fontSize: '30px',
}

var ul = {
    color: 'white',
    fontSize: '45px',
    listStyle: 'inside',
    position: 'absolute', left: '5%', top: '22%'
}


function App() {
    return (
      <Router>
            <div className="App" style={sectionStyle}>
               
                <h1 style={headerStyle}>My Phone Wearhouse Inc.</h1>
                <h5 style={textStyle}>Partnered with AIG - We Cover</h5>
                <br /><br />
                <br /><br />
          

                <ul style={ul}>
                    What We Cover?

                    <li style={leftList}>Cracked Screens</li>
                    <li style={leftList}>Loss and Theft</li>
                    <li style={leftList}>Minimal Water Damage</li>
                    <li style={leftList}>Battery Replacement</li>
          
                </ul>
              
                <p style={{ color: 'white', fontSize: '28px', position: 'absolute', left: '4%', top: '62%' }}>
                    Get Your One Year of Coverage today &#10003;</p>
                    <FormPage />
                


     </div>
            </Router>
  );
}

export default App;
