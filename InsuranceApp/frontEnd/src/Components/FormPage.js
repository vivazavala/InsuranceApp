import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Form
} from 'react-bootstrap';


var formStyle = {
    position: 'absolute', left: '50%', top: '70%',
    transform: 'translate(-50%, -50%)',
    height: '73%',
    width: '80%',
    borderRadius: '15px',
    backgroundColor: '#ffffff'
}


function FormPage() {
    return (
       
            <div className="Form">
            <Form style={formStyle}>
                <br />
                <h1 align="middle" style={{ color: 'black', fontSize: '45px'}}>Find out your premium!</h1>
                <h5 align="middle" style={{ color: 'black' }}>Fill form below</h5>
                <br />
                <br />

                <Form.Group controlId="formName" style={{ margin: "15px" }} >
                    <Form.Label> Enter Name</Form.Label>
                    <Form.Control  type="name" placeholder="Enter Name" />
                </Form.Group>
                

                <Form.Group controlId="formEmail" style={{ margin: "15px" }}>
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
  

                <Form.Group controlId="phoneBrand" style={{ margin: "15px" }}>
                    <Form.Label>Select Phone Brand</Form.Label>
                    <Form.Control as="select" custom>
                        <option value="1">Apple</option>
                        <option value="2">Samsung</option>
                    </Form.Control>
                </Form.Group>
         

            </Form>
           
     </div>
   
    );
}

export default FormPage;
