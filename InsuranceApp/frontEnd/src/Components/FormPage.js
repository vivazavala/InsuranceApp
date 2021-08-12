import React, { useState, useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Form, Button, Modal
} from 'react-bootstrap';


var formStyle = {
    position: 'absolute', left: '50%', top: '75%',
    transform: 'translate(-10%, -90%)',
    height: '60%',
    width: '40%',
    borderRadius: '20px',
    backgroundColor: '#ffffff'
}


function FormPage() {
    const [phoneBrand, setPhoneBrand] = useState();
    const [phoneCondition, setPhoneCondition] = useState();
    const [email, setEmail] = useState();
    const [total, setTotal] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>  setShow(true)


    const submit = async (e) => {
        e.preventDefault();
        var addUp = 100;
        if (phoneBrand == "apple")
            addUp = addUp + 25;
        if (phoneCondition == "2")
            addUp = addUp + 20;
        if (phoneCondition == "3")
            addUp = addUp + 40;
        
        setTotal(addUp);
        console.log("Your coverage cost would be : $" +total + " would you like us to send you your offer to: "+email);
        handleShow();
  
    };


    return (

            <div className="Form">
            <Form style={formStyle} onSubmit={submit}>
                <br />
                <h1 align="middle" style={{ color: 'black', fontSize: '35px'}}>Find out your premium!</h1>
                <h6 align="middle" style={{ color: 'black' }}>Fill form below</h6>
           
           

                <Form.Group controlId="formEmail" style={{ margin: "15px" }}>
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
  

                <Form.Group controlId="phoneBrand" style={{ margin: "15px" }}>
                    <Form.Label>Select Phone Brand</Form.Label>
                    <Form.Control onChange={(e) => setPhoneBrand(e.target.value)} as="select" custom >
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="other">Other</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="phoneCondition" style={{ margin: "15px" }}>
                    <Form.Label>Select Phone Condition</Form.Label>
                    <Form.Control as="select" custom placeholder="Select Phone Condition" onChange={(e) => setPhoneCondition(e.target.value)}>
                        <option value="1">Excellent</option>
                        <option value="2">Good</option>
                        <option value="3">Fair</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="getQuote" style={{ margin: "20px" }}>
                    <Button align="middle" variant="secondary" type="submit" block>
                        Get Quote
                            </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Like Your Quote?!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Your coverage cost would be: ${total}. Would you like us to send you your offer to: {email}?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
          </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Send Me My Offer
          </Button>
                        </Modal.Footer>
                    </Modal>
                </Form.Group>
         

            </Form>
           
     </div>
   
    );
}

export default FormPage;
