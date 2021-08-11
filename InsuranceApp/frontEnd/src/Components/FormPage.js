import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Form, FormLabel, FormGroup, select
} from 'react-bootstrap';



function FormPage() {
    return (
       
            <div className="Form">
            <Form>
                <FormGroup controlId="clientData">
                <FormLabel> Phone Brand </FormLabel>
                <select aria-label="Phonetype">
                    <option>Choose Option </option>
                    <option value="1">Apple</option>
                    <option value="2">Samsung</option>
                    </select>
                </FormGroup>
            </Form>
                
           
     </div>
   
    );
}

export default FormPage;
