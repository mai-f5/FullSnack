import React from 'react'
import SignIn from './SignIn'
import UserMenu from './UserMenu'
import { OverlayTrigger, Popover, Button, Nav } from 'react-bootstrap'
import { BiBell, BiUser } from 'react-icons/bi'
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
                rootClose
                overlay={
                    <Popover id={`popover-positioned-bottom`}>
                        {type === 'signin' ? <SignIn /> :
                            type === 'usermenu' ? <UserMenu /> :
                                'NOTIFICATIONS'
                        }
                    </Popover>
                }
            >

                {
                    <button className='btn-as-link'>
                        {
                            type === 'signin' ? 'Sign In' :
                                type === 'usermenu' ? <BiUser /> :
                                    <BiBell />
                        }
                    </button>

                }
                {/* 
                {type === 'signin' ? <button className='button-as-link'>Sign In</button> :
                    type === 'usermenu' ? <button>(user icon) </button> :
                        <button>(notifications icon) </button>
                } */}



                {/* <Button variant="secondary">Popover on </Button> */}
            </OverlayTrigger>
        </>
    )
}
