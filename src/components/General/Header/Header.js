import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import MyPopover from '../Popover/MyPopover';
import MyModal from '../Modal/MyModal';
import {
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logoSvg.svg';
import userContext from '../../../utils/AuthContext'
import Cookies from "js-cookie";

export default function Header() {
    const context = useContext(userContext)
    const history = useHistory();

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand ><Link to="/home" ><img src={logo} alt='full snack logo' className='img-fluid mr-3' id='logo' /><h1>Full Snack</h1></Link></Navbar.Brand>

                {/* notifications on small screens - outside of collapsed menu */}
                <Nav className='d-lg-none mr-3 mt-3 '>
                    {context.loggedUser.id && <>
                        <MyPopover type='notifications' />
                    </>}
                </Nav>

                {/* collapse menu btn */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* collapsed menu - includes (by logged state) - sign up, sign in/ my projects, settings, logout */}
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto text-light">
                        <div className='d-lg-none'>
                            <p className='m-0 mt-3'>Signed in as
                                <span className='font-weight-bold'> {context.loggedUser.username}</span>
                            </p>
                        </div>

                        <Nav.Link className='ml-lg-4'><Link to='/explore' >Explore</Link></Nav.Link>

                        <div className='border-top'>

                            {!context.loggedUser.id && <div className='d-lg-none'>
                                <div className='my-2'>
                                    <MyModal type='signup-nav' />
                                </div>
                                <div className='my-2'>
                                    <MyPopover type='signin' />
                                </div>
                            </div>}

                            {context.loggedUser.id && <div className='d-lg-none'>
                                <Nav.Link onClick={() => history.push(`/usersprojects/${context.loggedUser.id}`)}>My Projects</Nav.Link>
                                <Nav.Link onClick={() => history.push(`/settings/${context.loggedUser.id}`)}>Settings</Nav.Link>
                                <Nav.Link onClick={() => {
                                    Cookies.remove('fsCookie')
                                    context.setLoggedUser({})
                                }}>Log Out</Nav.Link>
                            </div>}
                        </div>
                    </Nav>

                    <Nav className='d-none d-lg-block'>
                        {!context.loggedUser.id &&
                            <>
                                <MyModal type='signup-nav' />
                                <MyPopover type='signin' />
                            </>
                        }
                        {context.loggedUser.id && <>
                            <MyPopover type='usermenu' />
                            <MyPopover type='notifications' />
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </header >
    )
}
