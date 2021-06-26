import React from 'react'
import SignIn from './SignIn'
import UserMenu from './UserMenu'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { BiBell, BiUser } from 'react-icons/bi'
import Notifications from './Notifications'

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
                                <Notifications />
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
            </OverlayTrigger>
        </>
    )
}
