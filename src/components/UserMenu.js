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
        <>
            <Nav /*defaultActiveKey="/home"*/ className="flex-column">
                <p>Signed in as<br />
                    leebaronx3
                </p>
                <hr />
                <Nav.Link onClick={() => history.push('/usersproject')}>My Projects</Nav.Link>
                <Nav.Link onClick={() => history.push('/settings')}>Settings</Nav.Link>
                <Nav.Link>Log Out</Nav.Link>

            </Nav>

        </>
    )
}
