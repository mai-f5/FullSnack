import React from 'react'
import {
    Link
} from "react-router-dom";

export default function Notifications() {
    const newNotifs = [
        { id: 1, project_id: 1, username: 'xmbaron', text: 'liked your project', is_read: 0, timestamp: '2021-07-07 21:21:21' },
        { id: 2, project_id: 1, username: 'xmbaron', text: 'posted a new thread on your project', is_read: 0, timestamp: '2021-07-07 21:21:21' },

    ]
    return (
        <div className='notification-wrapper m-n2 mb-n3'>
            {newNotifs.map(notification => {
                return <Link to="/projectdisplay" >
                    <p className='p-2 mb-2'>
                        <span className='font-weight-bold'>{notification.username}</span> {notification.text}
                        <span className='d-block notif-time pt-1 text-dark font-weight-bold'>{notification.timestamp}</span>
                    </p>
                </Link>
            })}
        </div>
    )
}
