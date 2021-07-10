import React from 'react'
import { Container, Button, Form, Row, ButtonGroup, ToggleButton, Col } from 'react-bootstrap'
import { FiSave } from 'react-icons/fi'
import nameTag from '../../../images/name_tag.svg'
import { FiCode } from 'react-icons/fi'
import { GrAttachment, GrGithub } from 'react-icons/gr'
import { BsBarChart, BsBook } from 'react-icons/bs'
import { CgImage } from 'react-icons/cg'
import MyDropzone from '../../General/FormComponents/MyDropzone'
import MyMultiSelect from '../../General/FormComponents/MyMultiSelect'

export default function EditProject() {
    return (
        <Container className='mt-5 edit-project'>
            <h2><span className='font-weight-normal'>My Projects /</span> {'Recipe\'s notebook'}</h2>
            <Form className='mt-5'>
                <Form.Row className='mb-5'>
                    <Col className='mr-md-5' sm={12} md={5} lg={3}>
                        <Form.Group controlId="projectName" className='mb-5'>
                            <Form.Label>
                                <img src={nameTag} alt='name tag icon' className='name-svg mr-2' />
                                Project Name:
                            </Form.Label>
                            <Row className='justify-content-between'>
                                <Form.Text className="text-muted">
                                    Must be between 2-20 characters
                                </Form.Text>
                                <Form.Text className="text-muted">
                                    Required
                                </Form.Text>
                            </Row>
                            <Form.Control type="text" placeholder="Project Name" />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="difficultyLevel" className='mb-5'>
                            <Form.Label>
                                <BsBarChart className='mr-2 text-dark' />
                                Difficulty Level:
                            </Form.Label>
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

                            <Form.Label><FiCode className='mr-2 text-dark' />Required Technologies</Form.Label>
                            <MyMultiSelect type={'tech'} location={'edit'} />
                        </Form.Group>
                    </Col>

                    <Col className='border-right border-dark pr-3 mr-4' sm={12} md={5} lg={4}>
                        <Form.Group controlId="username">
                            <Form.Label><GrGithub className='mr-2 text-dark' />Github Link:</Form.Label>
                            <Form.Control type="text" placeholder="Github Link" />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                        <Form.Group controlId="username">
                            <Form.Label><BsBook className='mr-2 text-dark' />Project Description:</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Project description... Explain to the users what they should expect" />
                            {/* <FormControl.Feedback type='invalid'></FormControl.Feedback> */}
                        </Form.Group>

                    </Col>


                    <Col className='' sm={12} md={5} lg={4}>
                        <Form.Group>
                            <Form.Label><CgImage className='mr-2 text-dark' />Project's Images:</Form.Label>
                            <MyDropzone type={'images'} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label><GrAttachment className='mr-2 text-dark' />Project's Assets:</Form.Label>
                            <MyDropzone type={'assets'} />
                        </Form.Group>
                    </Col>

                </Form.Row>
                <Row className='justify-content-end'>
                    <Button variant="primary" type="submit">
                        <FiSave className='mr-2' />Save Changes
                    </Button>
                </Row>
            </Form>

            <>{/*MODAL DELETING */}</>
        </Container>
    )
}