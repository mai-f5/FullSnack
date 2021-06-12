import React from 'react'
import { Row, Button, Form, FormControl } from 'react-bootstrap'
export default function ProjectsForum() {
    return (
        <div>
            <section>
                <h3>Recipes notebook's Forum</h3>
                <p>Feel free to ask questions in the forum and help others.</p>
            </section>
            <div>
                <Button>New Thread</Button>
                <div className='empty-forum'>
                    <div className='chatImg'></div>
                    <p>No Threads were created yet</p>
                </div>

                <div class='new-thread-form'>
                    {/*IN MODAL */}
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

                <div className='forum-filled'>
                    {/* COLLAPSE FOR MESSAGES */}
                </div>

            </div>
        </div>
    )
}
