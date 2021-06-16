import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function PasswordChange() {
    return (
        <div>
            <h2>Password Change</h2>
            <hr />
            <Form>
                <Form.Group controlId="password">
                    <Form.Label>Old password:</Form.Label>
                    <Form.Control type="password" />
                    {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>New password:</Form.Label>
                    <Form.Text className="text-muted">
                        Must be between 8-16 characters, At least 1 letter and 1 number
                    </Form.Text>
                    <Form.Control type="password" />
                    {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                </Form.Group>


                <Form.Group controlId="passwordConfirm">
                    <Form.Label>Confirm new password:</Form.Label>
                    <Form.Text className="text-muted">
                        Must match password
                    </Form.Text>
                    <Form.Control type="password" />
                    {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                </Form.Group>

                <Button disabled>Save Changes</Button> <Button>Cancel</Button>
            </Form>
        </div>
    )
}
