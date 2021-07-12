import React from 'react'
import SignIn from './SignIn/SignIn'
import UserMenu from './UsersMenu/UserMenu'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { BiBell } from 'react-icons/bi'
import Notifications from './Notifications/Notifications'
import userProfileImagePlaceholder from '../../../images/usersImages/user_id_1/img-placeholder.png'
import { useState, useEffect } from 'react'
import { getUsersNewNotifications } from '../../../DAL/events'

export default function MyPopover({ type }) {
    const [notifsCount, setNotifsCount] = useState(2)


    const [notifications, setNotifications] = useState()
    useEffect(async () => {
        switch (type) {
            case 'notifications':
                let data;
                data = await getUsersNewNotifications(1)
                if (data.length > 0) setNotifications([...data])
                break;
        }

        // setNotifications([...data])
    }, [])


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
                                <Notifications notifications={notifications} />
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
                                        {notifications && notifications.length > 0 ? <div className='notif-badge rounded-circle bg-white text-dark text-center mt-n4 font-weight-bold ml-3'>{notifications.length}</div> : null}
                                    </div>
                        }
                    </button>
                }
            </OverlayTrigger>
        </>
    )
}
