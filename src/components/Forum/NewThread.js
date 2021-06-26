import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function NewThread() {
    return (
        <div class='new-thread-form'>
            {/*WILL BE IN MODAL */}
            <h4>New Thread</h4>
            <Form>

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
    )
}
