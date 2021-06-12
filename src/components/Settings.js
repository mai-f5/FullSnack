import React from 'react'
import { Button, Form, Col, ButtonGroup, ToggleButton } from 'react-bootstrap'
import imgPlaceholder from '../images/img-placeholder.png'
export default function Settings() {
    return (
        <>
            <h2>Settings / </h2>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={'leebaronx3@gmail.com'} />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        <Button>Change Password</Button>

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
                    </Col>
                    <Col>
                        <Form.Group controlId="difficultyLvl">
                            <Form.Label>Gender:</Form.Label>
                            <ButtonGroup>
                                <ToggleButton type='radio' checked={false}>Female</ToggleButton>
                                <ToggleButton type='radio' checked={false}>Male</ToggleButton>
                                <ToggleButton type='radio' checked={false}>Other</ToggleButton>
                            </ButtonGroup>
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="difficultyLvl">
                            <Form.Label>Birthdate:</Form.Label>
                            <input type='date' />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>



                        <Form.Group controlId="occupationSelect" className='mr-2'>
                            <Form.Control as="select" custom>
                                <option>Select your occupation:</option>
                                <option>Student</option>
                                <option>Junior Developer</option>
                                <option>Senior Developer</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>

                    </Col>

                    <Col>
                        <Form.Group controlId="profilePic">
                            <Form.Label>Profile Pic:</Form.Label>
                            <img src={imgPlaceholder} className='img-fluid rounded-circle' />
                            <Button>Edit</Button>
                            <Form.File></Form.File>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button variant="primary" type="submit">
                    SAVE SETTINGS
                </Button>
            </Form>
        </>
    )
}
