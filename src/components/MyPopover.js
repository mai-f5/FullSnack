import React from 'react'
import SignIn from './SignIn'
import UserMenu from './UserMenu'
import { OverlayTrigger, Popover, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function MyPopover({ type }) {
    console.log(type)
    return (
        <>
            <OverlayTrigger
                trigger="click"
                key='bottom'
                placement='bottom'
                overlay={
                    <Popover id={`popover-positioned-bottom`}>
                        {type === 'signin' ? <SignIn /> :
                            type === 'usermenu' ? <UserMenu /> :
                                'NOTIFICATIONS'
                        }

                        {/* <Popover.Title as="h3">{`Popover `}</Popover.Title>
                        <Popover.Content>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Content> */}
                    </Popover>
                }
            >
                {type === 'signin' ? <Button variant="secondary">Sign In</Button> :
                    type === 'usermenu' ? <Button variant="secondary">(user icon) </Button> :
                        <Button variant="secondary">(notifications icon) </Button>
                }



                {/* <Button variant="secondary">Popover on </Button> */}
            </OverlayTrigger>
        </>
    )
}
