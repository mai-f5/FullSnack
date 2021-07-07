import React from 'react'
import { useState } from 'react'
import { Row, Accordion } from 'react-bootstrap'
import { HiChatAlt2 } from 'react-icons/hi'
// import { MdReply } from 'react-icons/md'
import MyModal from '../../../General/Modal/MyModal'

import ForumThread from './ForumThread'
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
                    <div className='forum-filled bg-light p-3 forum-bg p-2'>
                        <Accordion>
                            {threads.map((thread, idx) => {
                                return <ForumThread thread={thread} idx={idx} />
                            })}

                        </Accordion>
                    </div>
                }
            </div>
        </div>
    )
}
