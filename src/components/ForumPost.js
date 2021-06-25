import React from 'react'
import { MdReply } from 'react-icons/md'
import userProfileImagePlaceholder from '../images/usersImages/user_id_1/img-placeholder.png'
export default function ForumPost({ thread }) {
    return (
        <div className='media'>
            <img src={userProfileImagePlaceholder} className='mr-3 forum-user-img rounded-circle d-inline' />
            <div className='media-body forum-post'>
                <h4 className='text-left font-weight-bolder'>{thread.topic}</h4>

                <p className='d-inline mr-5 blk-txt'>By {thread.username}</p>
                <p className='d-inline mr-5 blk-txt font-weight-normal'>{thread.timestamp}</p>
                <p className='d-inline font-weight-normal'><MdReply className='mr-1' /><span className='blk-txt'>{thread.comments.length} {thread.comments.length === 1 ? 'replay' : 'replies'}</span></p>
            </div>
        </div>
    )
}
