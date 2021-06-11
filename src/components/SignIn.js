import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

export default function SignIn() {
    return (
        <div>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />

                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}

                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>



        </div>
    )
}
