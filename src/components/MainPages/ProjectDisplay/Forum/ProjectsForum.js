import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Accordion, Spinner } from 'react-bootstrap'
import { HiChatAlt2 } from 'react-icons/hi'
import MyModal from '../../../General/Modal/MyModal'
import { getProjectsThreadsComments } from '../../../../DAL/forum';

import ForumThread from './ForumThread'
export default function ProjectsForum({ projectData }) {
    console.log(projectData)

    const [forumData, setForumData] = useState([])
    const [load, setLoad] = useState(true)
    const [rerender, setRerender] = useState(false)

    useEffect(async () => {
        if (projectData.id) {
            setLoad(true)
            const forum = await getProjectsThreadsComments(projectData.id)
            console.log(forum)
            setForumData([...forum])
        }
    }, [projectData.id, rerender])

    useEffect(() => {
        if (forumData) setLoad(false)
    }, [forumData])

    const reloadForum = () => {
        setRerender(!rerender)
    }

    return (
        <div className='projects-forum'>
            <div>
                <section>
                    <h3>{projectData.name}'s Forum</h3>
                    <p>Feel free to ask questions in the forum and help others.</p>
                </section>
                {load && <div className='text-center'><Spinner animation="border" variant="dark" /></div>}
                {!load && <div>
                    <Row className='justify-content-end mr-2  mb-2'>
                        <MyModal type='newThread' relevantData={{ projectId: projectData.id, projectsOwnerId: projectData.user.id }} invokeRerender={reloadForum} />
                    </Row>

                    {forumData.length < 1 ? <div className='empty-forum text-center mb-5 forum-bg'>
                        <HiChatAlt2 />
                        <p>No Threads were created yet</p>
                    </div>
                        :
                        <div className='forum-filled bg-light forum-bg p-2'>
                            <Accordion>
                                {forumData.map((thread, idx) => {
                                    return <ForumThread thread={thread} idx={idx} projectOwnerId={projectData.user.id} invokeRerender={reloadForum} />
                                })}
                            </Accordion>
                        </div>
                    }
                </div>}
            </div>
        </div>
    )
}
