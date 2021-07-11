import React, { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';


export default function UserMenu() {
    const history = useHistory();

    const [user, setUser] = useState()
    useEffect(() => {
        const currUser = JSON.parse(localStorage.getItem("loggedUser"))
        if (currUser) setUser(currUser)
    }, [])

    return (
        <div className='user-menu-wrapper'>
            <p>Signed in as
                <span className='d-block font-weight-bold'>{user ? user.username : 'temp'}</span>
            </p>
            <hr className='border-dark' />
            <Nav /*defaultActiveKey="/home"*/ className="flex-column">
                <Nav.Link onClick={() => history.push('/explore', user)}>My Projects</Nav.Link>
                <Nav.Link onClick={() => history.push(`/settings/${user.id}`, user)}>Settings</Nav.Link>
                <Nav.Link onClick={() => {
                    localStorage.removeItem('loggedUser')
                    history.push('/home')
                    window.location.reload(); //TEMP
                }

                }>Log Out</Nav.Link>

            </Nav>

        </div>
    )
}
