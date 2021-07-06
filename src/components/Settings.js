import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { Container, Button, Form, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap'
import imgPlaceholder from '../images/img-placeholder.png'
import MyModal from './MyModal'

export default function Settings() {
    const location = useLocation();
    const { uid } = useParams();

    const [dataChanged, setDataChanged] = useState(false)
    const [passwordChanged, setPasswordChanged] = useState(false)
    // const [passwordModalOpen, setPasswordModalOpen] = useState(false)
    const elementRef = useRef();

    useEffect(() => {
        const divElement = elementRef.current;
        console.log(divElement); // logs <div>I'm an element</div>
    }, []);


    return (
        <Container className='settings mt-5'>
            <h2 className='mb-0 pb-0'><span className='font-weight-normal'>Settings /</span> {'leebaronx3'} </h2>
            {dataChanged && <small className='text-success'>Changes saved successfully!</small>}
            <Form className='mt-5'>
                <Form.Row className='mb-5'>
                    <Col className='mr-md-5' sm={12} md={5} lg={3}>
                        <Form.Group controlId="email" className='mb-5'>
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={'leebaronx3@gmail.com'} className='w-100' />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        {/* <Button>Change Password</Button> */}
                        <div className='mb-5'>
                            <MyModal type='password' />
                            {passwordChanged && <small className='text-success d-block'>Password changed successfully!</small>}
                        </div>
                    </Col>
                    <Col className='mb-5 mr-md-5' sm={12} md={5} lg={3}>
                        <Form.Group controlId="gender" className='mb-5'>
                            <Form.Label className='d-block'>Gender:</Form.Label>
                            <ButtonGroup className=''>
                                <ToggleButton type='radio' checked={false}>Female</ToggleButton>
                                <ToggleButton type='radio' checked={false}>Male</ToggleButton>
                                <ToggleButton type='radio' checked={false}>Other</ToggleButton>
                            </ButtonGroup>
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="birthdate" className='mb-5'>
                            <Form.Label className='d-block'>Birthdate:</Form.Label>
                            <input type='date' />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>


                        <Form.Group controlId="occupationSelect">
                            <Form.Control as="select">
                                <option>Select your occupation:</option>
                                <option>Student</option>
                                <option>Junior Developer</option>
                                <option>Senior Developer</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>

                    </Col>

                    <Col md={12} lg={4} className='text-center'>
                        <Form.Group controlId="profilePic" className='user-profile-img'>
                            <Form.Label className='d-block'>Profile Pic:</Form.Label>
                            <img src={imgPlaceholder} className='img-fluid rounded-circle' />
                            <Button onClick={(e) => { elementRef.current.click() }}>Edit</Button>
                            <Form.File hidden ref={elementRef}></Form.File>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Row className='justify-content-end'>
                    <Button variant="primary" type="submit" className='mt-5 mb-5'>
                        Save Settings
                    </Button>
                </Row>
            </Form>
        </Container>
    )
}
