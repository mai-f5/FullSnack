import React from 'react'
import {
    Link
} from "react-router-dom";
import { handleTimestamp } from '../../../../utils/handlers';

export default function Notifications({ notifications }) {
    return (
        <div className='notification-wrapper m-n2 mb-n3'>
            {notifications.map((notification, idx) => {
                return <Link to={`/projectdisplay/${notification.project_id}`} key={idx}>
                    <p className='p-2 mb-2'>
                        <span className='font-weight-bold'>{notification.acted_user.username}</span> {notification.type.text}
                        <span className='d-block notif-time pt-1 text-dark font-weight-bold'>{handleTimestamp(notification.timestamp)}</span>
                    </p>
                </Link>
            })}
        </div>
    )
}
