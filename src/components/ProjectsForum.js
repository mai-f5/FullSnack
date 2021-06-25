import React from 'react'
import { useState } from 'react'
import { Row, Button, Form, FormControl, Accordion, Card } from 'react-bootstrap'
import { HiChatAlt2 } from 'react-icons/hi'
// import { MdReply } from 'react-icons/md'
import MyModal from './MyModal'
import userProfileImagePlaceholder from '../images/usersImages/user_id_1/img-placeholder.png'
import ForumPost from './ForumPost'
import ForumComment from './ForumComment'
export default function ProjectsForum() {
    const [hasThreads, setHasThreads] = useState(true)
    const [clickedNewThread, setClickedNewThread] = useState(false)
    const threads = [
        {
            id: 1,
            project_id: 1,
            username: 'leebaronx3',
            topic: 'hello world',
            body: 'help me ',
            timestamp: '15/6/2021',
            comments: [
                {
                    id: 1,
                    thread_id: 1,
                    username: 'xmbaron',
                    text: 'i\'ll help ya',
                    timestamp: '15/6/2021',
                }
            ]
        },
        {
            id: 1,
            project_id: 1,
            username: 'xmbaron',
            topic: 'HOW CAN I',
            body: 'hi please help, i dont understand how can i upload images to server ',
            timestamp: '15/6/2021',
            comments: [
                {
                    id: 1,
                    thread_id: 1,
                    username: 'xmbaron',
                    text: 'i\'ll help ya, you need to do this and that',
                    timestamp: '15/6/2021',
                },
                {
                    id: 1,
                    thread_id: 1,
                    username: 'xmbaron',
                    text: 'i\'ll help ya, you need to do this and that',
                    timestamp: '15/6/2021',
                },
                {
                    id: 1,
                    thread_id: 1,
                    username: 'xmbaron',
                    text: 'i\'ll help ya, you need to do this and that',
                    timestamp: '15/6/2021',
                },
                {
                    id: 1,
                    thread_id: 1,
                    username: 'xmbaron',
                    text: 'i\'ll help ya, you need to do this and that',
                    timestamp: '15/6/2021',
                }
            ]
        }

    ]
    return (
        <div className='projects-forum'>
            <section>
                <h3>Recipes notebook's Forum</h3>
                <p>Feel free to ask questions in the forum and help others.</p>
            </section>
            <div>
                <Row className='justify-content-end mr-2  mb-3'>
                    <MyModal type='newThread' />
                </Row>


                {!hasThreads && <div className='empty-forum text-center mb-5 p-3 forum-bg'>
                    <HiChatAlt2 />
                    <p>No Threads were created yet</p>
                </div>}

                {hasThreads &&
                    <div className='forum-filled  bg-light p-3 forum-bg p-2'>
                        <Accordion>
                            {threads.map((thread, idx) => {
                                return (<Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={idx.toString()} className='btn-as-link text-dark forum-post'>
                                            <ForumPost thread={thread} />
                                            {/* <div className='media'>
                                                <img src={userProfileImagePlaceholder} className='mr-3 forum-user-img rounded-circle d-inline' />
                                                <div className='media-body forum-post'>
                                                    <h4 className='text-left font-weight-bolder'>{thread.topic}</h4>

                                                    <p className='d-inline mr-5 blk-txt'>By {thread.username}</p>
                                                    <p className='d-inline mr-5 blk-txt font-weight-normal'>{thread.timestamp}</p>
                                                    <p className='d-inline font-weight-normal'><MdReply className='mr-1' /><span className='blk-txt'>{thread.comments.length} {thread.comments.length === 1 ? 'replay' : 'replies'}</span></p>
                                                </div>
                                            </div> */}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={idx.toString()}>
                                        <Card.Body>
                                            {/* thread content  */}
                                            {thread.body}
                                            {/* comments */}
                                            {thread.comments.map(comment => <ForumComment comment={comment} />)}
                                            {/* {thread.comments.map(comment => 
                                            {
                                                return <Card.Body>
                                                    <div className='media forum-comment p-4'>
                                                        <img src={userProfileImagePlaceholder} className='mr-3 forum-user-img rounded-circle d-inline' />
                                                        <div className='media-body'>
                                                            <p className='d-inline mr-5 blk-txt font-weight-bold'>{comment.username}</p>
                                                            <p className='d-inline mr-5 blk-txt font-weight-normal'>{comment.timestamp}</p>
                                                            <p className=' mr-5 blk-txt font-weight-normal'>{comment.text}</p>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            }
                                            )} */}
                                        </Card.Body>

                                    </Accordion.Collapse>
                                </Card>)
                            })}

                        </Accordion>
                    </div>
                }
            </div>
        </div>
    )
}
