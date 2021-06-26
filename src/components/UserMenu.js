import React from 'react'
import { Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';


export default function UserMenu() {
    const history = useHistory();
    return (
        <div className='user-menu-wrapper'>
            <p>Signed in as
                <span className='d-block font-weight-bold'>leebaronx3</span>
            </p>
            <hr className='border-dark' />
            <Nav /*defaultActiveKey="/home"*/ className="flex-column">
                <Nav.Link onClick={() => history.push('/usersproject')}>My Projects</Nav.Link>
                <Nav.Link onClick={() => history.push('/settings')}>Settings</Nav.Link>
                <Nav.Link>Log Out</Nav.Link>

            </Nav>

        </div>
    )
}
