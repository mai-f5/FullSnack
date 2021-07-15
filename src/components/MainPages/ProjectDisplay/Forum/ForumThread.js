import React from 'react'
import { MdReply } from 'react-icons/md'
import { Card, Accordion, Button } from 'react-bootstrap'
import ForumComment from './ForumComment'
import userProfileImagePlaceholder from '../../../../images/usersImages/user_id_1/img-placeholder.png'
import NewComment from './ForumForms/CommentTextEditor/NewComment'

export default function ForumThread({ thread, idx }) {
    return (<Card>
        <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={idx.toString()} className='btn-as-link text-dark forum-post w-100'>
                <div className='media text-left'>
                    <img src={userProfileImagePlaceholder} className='mr-3 mt-2 forum-user-img rounded-circle d-inline' alt='user' />
                    <div className='media-body forum-post'>
                        <h4 className='font-weight-bolder mt-2 mb-0'>{thread.topic}</h4>
                        <div className='d-md-flex justify-content-between w-75 blk-txt'>
                            <p className='my-1 font-weight-bold'>By {thread.user.username}</p>
                            <p className='my-1'>{thread.timestamp}</p>
                            <p>
                                <MdReply className='mr-1 text-dark' />
                                <span>{thread.comments.length} {thread.comments.length === 1 ? 'replay' : 'replies'}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={idx.toString()}>
            <Card.Body>
                <div className='thread-body py-3 pl-5 pr-3 border border-dark rounded font-weight-normal'>
                    {thread.body}
                </div>
                {thread.comments.map((comment, idx) => <ForumComment key={idx} comment={comment} />)}
                <div className='insert-new-comment'>
                    <NewComment />
                </div>
            </Card.Body>

        </Accordion.Collapse>
    </Card>)

}
