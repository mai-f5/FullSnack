import React, { useState, useEffect, useContext } from 'react'
import { Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Cookies from "js-cookie";
import userContext from '../../../../utils/AuthContext';

export default function UserMenu() {
    const history = useHistory();
    const context = useContext(userContext)

    return (
        <div className='user-menu-wrapper'>
            <p>Signed in as
                <span className='d-block font-weight-bold'>{context.loggedUser.username}</span>
            </p>
            <hr className='border-dark' />
            <Nav className="flex-column">
                <Nav.Link onClick={() => history.push('/explore')}>My Projects</Nav.Link>
                <Nav.Link onClick={() => history.push(`/settings/${context.loggedUser.id}`)}>Settings</Nav.Link>
                <Nav.Link onClick={() => {

                    Cookies.remove('fsCookie')
                    context.setLoggedUser({})
                    history.push('/home')
                }
                }>Log Out</Nav.Link>

            </Nav>

        </div>
    )
}
