import React from 'react'
import { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import MyPopover from '../Popover/MyPopover';
import MyModal from '../Modal/MyModal';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logoSvg.svg';


export default function Header() {
    const history = useHistory();
    const [logged, setLogged] = useState(false)
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand ><Link to="/home" ><img src={logo} alt='full snack logo' className='img-fluid mr-3' id='logo' /><h1>Full Snack</h1></Link></Navbar.Brand>

                {/* notifications on small screens - outside of collapsed menu */}
                <Nav className='d-lg-none'>
                    {logged && <>
                        <MyPopover type='notifications' />
                    </>}
                </Nav>

                {/* collapse menu btn */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* collapsed menu - includes (by logged state) - sign up, sign in/ my projects, settings, logout */}
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link className='ml-lg-4'><Link to='/explore' >Explore</Link></Nav.Link>

                        <div className='border-top'>

                            {!logged && <div className='d-lg-none'>
                                <div className='my-2'>
                                    <MyModal type='signup-nav' />
                                </div>
                                <div className='my-2'>
                                    <MyPopover type='signin' />
                                </div>
                            </div>}

                            {logged && <div className='d-lg-none'>
                                <Nav.Link onClick={() => history.push('/usersproject')}>My Projects</Nav.Link>
                                <Nav.Link onClick={() => history.push('/settings')}>Settings</Nav.Link>
                                <Nav.Link onClick={() => setLogged(false)}>Log Out</Nav.Link>
                            </div>}
                        </div>
                    </Nav>

                    <Nav className='d-none d-lg-block'>
                        {!logged &&
                            <>
                                <MyModal type='signup-nav' />
                                <MyPopover type='signin' />
                            </>
                        }
                        {logged && <>
                            <MyPopover type='usermenu' />
                            <MyPopover type='notifications' />
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </header >
    )
}
