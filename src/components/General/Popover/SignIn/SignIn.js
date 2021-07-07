import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function SignIn() {
    return (
        <>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" />

                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className='d-block mx-auto'>
                    Sign in
                </Button>
            </Form>
        </>
    )
}
