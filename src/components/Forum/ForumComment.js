import React from 'react'
import { Card } from 'react-bootstrap'
import userProfileImagePlaceholder from '../../images/usersImages/user_id_1/img-placeholder.png'
export default function ForumComment({ comment }) {
    return (
        <div>
            <Card.Body className=''>
                <div className='media text-left forum-comment pt-3 pl-5'>
                    <img src={userProfileImagePlaceholder} className='mr-3 forum-user-img rounded-circle d-inline' />
                    <div className='media-body '>
                        <div className='comment-mdata d-md-flex justify-content-between'>
                            <p className='m-0 mb-md-2 d-md-inline mr-md-4 blk-txt font-weight-bold'>{comment.username}</p>
                            <p className='m-0 d-md-inline mr-4 blk-txt font-weight-light text-muted'>{comment.timestamp}</p>
                        </div>
                        <p className='mr-4 blk-txt font-weight-normal'>{comment.text}</p>
                    </div>
                </div>
            </Card.Body>
        </div>
    )
}
