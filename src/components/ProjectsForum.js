import React from 'react'
import { useState } from 'react'
import { Row, Button, Form, FormControl, Accordion, Card } from 'react-bootstrap'
import { HiChatAlt2 } from 'react-icons/hi'
export default function ProjectsForum() {
    const [hasThreads, setHasThreads] = useState(true)
    const [clickedNewThread, setClickedNewThread] = useState(false)
    const threads = [
        {
            id: 1,
            project_id: 1,
            user_id: 1,
            topic: 'hello world',
            body: 'help me ',
            timestamp: '17/6/2021'
        },
        {
            id: 1,
            project_id: 1,
            user_id: 1,
            topic: 'HOW CAN I',
            body: 'help me ',
            timestamp: '15/6/2021'
        }

    ]
    return (
        <div className='projects-forum mt-5'>
            <section>
                <h3>Recipes notebook's Forum</h3>
                <p>Feel free to ask questions in the forum and help others.</p>
            </section>
            <div>
                <Row className='justify-content-end mr-2  mb-3'>
                    <Button>New Thread</Button>
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
                                        <Accordion.Toggle as={Button} variant="link" eventKey={idx.toString()} className='btn-as-link text-dark'>
                                            <h4>{thread.topic}</h4>
                                            <p>{thread.timestamp}</p>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={idx.toString()}>
                                        <Card.Body>{thread.body}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>)
                            })}

                        </Accordion>
                    </div>
                }

                {/* TEMP */}
                {clickedNewThread &&
                    <div class='new-thread-form'>
                        {/*WILL BE IN MODAL */}
                        <Form>
                            <h4>New Thread</h4>

                            <Form.Group controlId="thread">
                                <Form.Label>Topic:</Form.Label>
                                <Form.Text className="text-muted">
                                    Must be between 2-75 characters
                                </Form.Text>
                                <Form.Text className="text-muted">
                                    Required
                                </Form.Text>
                                <Form.Control type="text" placeholder="Enter Topic" />
                            </Form.Group>

                            <Form.Group controlId="thread">
                                <Form.Label>Body:</Form.Label>
                                <Form.Control as="textarea" rows={10} />
                                {/* PLUGIN FOR TEXT EDITOR */}
                            </Form.Group>
                            <Button>Post Thread</Button>
                        </Form>

                    </div>
                }
            </div>
        </div>
    )
}
