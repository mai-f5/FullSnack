import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import logo from '../images/logo.png'
import logo from '../images/logoSvg.svg'
export default function Header() {
    return (
        <header>
            <Navbar>
                <Navbar.Brand ><Link to="/home" ><img src={logo} alt='full snack logo' className='img-fluid mr-3' id='logo' /><h1>Full Snack</h1></Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link ><Link to="/explore" >Explore</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link ><Link to="/signup" >Sign Up</Link></Nav.Link>
                    <Nav.Link ><Link to="/signin" >Sign In</Link></Nav.Link>
                    {/* <Nav.Link ><Link to="/usermenu" >(user menu icon)</Link></Nav.Link> */}
                    {/* <Nav.Link >(Notifications)</Nav.Link> */}
                </Nav>
            </Navbar>
        </header>
    )
}
