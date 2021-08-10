import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';

function NavBar() {
	return (
        <div>
          
            <Navbar bg="dark" variant="dark">
                <Nav className="m1-auto">
                    <Nav.Link href="#home">About Me</Nav.Link>
                    <Nav.Link href="#features">Projects</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar>
			</div>
		);
}

export default NavBar
