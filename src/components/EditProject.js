import React from 'react'
import { Button, Form, ButtonGroup, ToggleButton, Col } from 'react-bootstrap'
export default function EditProject() {
    return (
        <div>
            <h2>My Projects /</h2>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="username">
                            <Form.Label>Project Name:</Form.Label>
                            <Form.Text className="text-muted">
                                Must be between 2-20 characters
                            </Form.Text>
                            <Form.Text className="text-muted">
                                Required
                            </Form.Text>
                            <Form.Control type="text" placeholder="Project Name" />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Difficulty Level:</Form.Label>
                            <Form.Text className="text-muted">
                                Required
                            </Form.Text>
                            <ButtonGroup>
                                <ToggleButton type='radio' checked={false}>Easy</ToggleButton>
                                <ToggleButton type='radio' checked={false}>Medium</ToggleButton>
                                <ToggleButton type='radio' checked={false}>Hard</ToggleButton>
                            </ButtonGroup>
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="requiredTechSelect" className='mr-2'>
                            <Form.Control as="select" custom>
                                <option>Required Technologies:</option>
                                {/* <option>
                                <input type='checkbox'>html</input>
                            </option>
                            <option>
                                <input type='checkbox'>html</input>
                            </option> */}
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="username">
                            <Form.Label>Github Link:</Form.Label>
                            <Form.Control type="text" placeholder="Project Name" />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="username">
                            <Form.Label>Project Description:</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Project description... Explain to the users what they should expect" />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                    </Col>


                    <Col>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Project's Pictures" />
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Project's Assets:" />
                        </Form.Group>
                    </Col>



                </Form.Row>
                <Button variant="primary" type="submit" className=''>
                    SAVE CHANGES
                </Button>
            </Form>

            <>{/*MODAL DELETING */}</>
        </div>
    )
}
