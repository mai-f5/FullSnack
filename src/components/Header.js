import React from 'react'
import { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import MyPopover from './MyPopover';
import MyModal from './MyModal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../images/logoSvg.svg';

export default function Header() {
    const [logged, setLogged] = useState(false)
    return (
        <header>
            <Navbar>
                <Navbar.Brand ><Link to="/home" ><img src={logo} alt='full snack logo' className='img-fluid mr-3' id='logo' /><h1>Full Snack</h1></Link></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link ><Link to="/explore" >Explore</Link></Nav.Link>
                </Nav>
                <Nav>
                    {!logged &&
                        <>
                            <MyModal type='signup' />
                            <MyPopover type='signin' />
                        </>
                    }
                    {logged && <>
                        <MyPopover type='notifications' />
                        <MyPopover type='usermenu' /></>}
                </Nav>
            </Navbar>
        </header>
    )
}
