import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Homepage() {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark" className='justify-content-between'>
                    <Navbar.Brand>Fullstacker</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link >Explore</Nav.Link>
                        <Nav.Link >Sign Up</Nav.Link>
                        <Nav.Link >Sign In</Nav.Link>
                    </Nav>

                </Navbar>
            </header>



        </div>
    )
}
