import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

export default function SignUp() {
    return (
        <>
            <h2>Sign Up</h2>
            <hr />
            <p>All fields are Required</p>
            <Form>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Text className="text-muted">
                        Must be between 4-12 characters
                    </Form.Text>
                    <Form.Control type="text" placeholder="Enter Username" />
                    {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Text className="text-muted">
                        Must be a valid email address
                    </Form.Text>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Text className="text-muted">
                        Must be between 8-16 characters, At least 1 letter and 1 number
                    </Form.Text>
                    <Form.Control type="password" placeholder="Password" />
                    {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                </Form.Group>


                <Form.Group controlId="passwordConfirm">
                    <Form.Label>Password</Form.Label>
                    <Form.Text className="text-muted">
                        Must match password
                    </Form.Text>
                    <Form.Control type="password" placeholder="Enter password again" />
                    {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Join
                </Button>
            </Form>
        </>
    )
}
