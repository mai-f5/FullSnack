import React from 'react'
import { Nav } from 'react-bootstrap'

export default function UserMenu() {
    return (
        <>
            <Nav /*defaultActiveKey="/home"*/ className="flex-column">
                <p>Signed in as<br />
                    leebaronx3
                </p>
                <hr />
                <Nav.Link>My Projects</Nav.Link>
                <Nav.Link>Settings</Nav.Link>
                <Nav.Link>Log Out</Nav.Link>

            </Nav>
        </>
    )
}
