import React from 'react'
import SignIn from './SignIn/SignIn'
import UserMenu from './UsersMenu/UserMenu'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import { BiBell } from 'react-icons/bi'
import Notifications from './Notifications/Notifications'
import userProfileImagePlaceholder from '../../../images/img-placeholder.png'
import { useState, useEffect, useContext } from 'react'
import { getUsersNewNotifications, updateNotificationsAsRead } from '../../../DAL/events'
import userContext from '../../../utils/AuthContext'
export default function MyPopover({ type }) {
    const context = useContext(userContext);
    const [notifications, setNotifications] = useState([])
    const [updateNotifs, setUpdateNotifs] = useState(false)

    async function fetchNotifications() {
        const data = await getUsersNewNotifications(context.loggedUser.id)
        if (data.length > 0) setNotifications([...data])
        else {
            // setTimeout(() => {
            setNotifications([])
            // }, 30000)
        }
    }

    useEffect(async () => {
        switch (type) {
            case 'notifications':
                fetchNotifications()
                break;
        }
    }, [updateNotifs])

    // setInterval(() => {
    //     fetchNotifications()
    // }, 1000 * 60 * 5)

    const handleNotifications = async () => {
        await updateNotificationsAsRead(context.loggedUser.id)
        setUpdateNotifs(!updateNotifs)
    }

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
                    <button className='btn-as-link' disabled={type === 'notifications' && notifications.length < 1 ? true : false} onClick={(e) => {
                        if (type === 'notifications') handleNotifications()
                    }}>
                        {
                            type === 'signin' ? 'Sign In' :
                                type === 'usermenu' ?
                                    <img src={userProfileImagePlaceholder} className='header-user-img rounded-circle' alt='user profile' />
                                    :
                                    <div className='mt-n3'>
                                        <BiBell />
                                        {notifications.length > 0 ? <div className='notif-badge rounded-circle bg-white text-dark text-center mt-n4 font-weight-bold ml-3'>{notifications.length}</div> : null}
                                    </div>
                        }
                    </button>
                }
            </OverlayTrigger>
        </>
    )
}
