import React from 'react'
import SignIn from './SignIn/SignIn'
import UserMenu from './UsersMenu/UserMenu'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { BiBell } from 'react-icons/bi'
import Notifications from './Notifications/Notifications'
import userProfileImagePlaceholder from '../../../images/usersImages/user_id_1/img-placeholder.png'
import { useState } from 'react'
export default function MyPopover({ type }) {
    const [notifsCount, setNotifsCount] = useState(2)
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
                                type === 'usermenu' ?
                                    <img src={userProfileImagePlaceholder} className='header-user-img rounded-circle' alt='user profile' />
                                    :
                                    <div className='mt-n3'>
                                        <BiBell />
                                        {notifsCount > 0 ? <div className='notif-badge rounded-circle bg-white text-dark text-center mt-n4 font-weight-bold ml-3'>{2}</div> : null}
                                    </div>
                        }
                    </button>
                }
            </OverlayTrigger>
        </>
    )
}
