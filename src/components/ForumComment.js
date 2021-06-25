import React from 'react'
import { Card } from 'react-bootstrap'
import userProfileImagePlaceholder from '../images/usersImages/user_id_1/img-placeholder.png'
export default function ForumComment({ comment }) {
    return (
        <div>
            <Card.Body>
                <div className='media forum-comment p-4'>
                    <img src={userProfileImagePlaceholder} className='mr-3 forum-user-img rounded-circle d-inline' />
                    <div className='media-body'>
                        <p className='d-inline mr-5 blk-txt font-weight-bold'>{comment.username}</p>
                        <p className='d-inline mr-5 blk-txt font-weight-normal'>{comment.timestamp}</p>
                        <p className=' mr-5 blk-txt font-weight-normal'>{comment.text}</p>
                    </div>
                </div>
            </Card.Body>
        </div>
    )
}
