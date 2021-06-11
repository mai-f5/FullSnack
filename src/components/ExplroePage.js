import React from 'react'
import { Navbar, Nav, Container, Row, Button, Form, FormControl } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
export default function ExplroePage() {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Full Snack</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link >Explore</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >Sign Up</Nav.Link>
                        <Nav.Link >Sign In</Nav.Link>
                    </Nav>
                </Navbar>
            </header>

            <Container>
                <div className='topSection'>
                    <h2>Full Stack Projects</h2>
                    <Form inline>
                        <Form.Label>Search</Form.Label>
                        <FormControl type="text" placeholder="Search by keyword..." className="mr-sm-2" />
                        <Button variant="outline-success" >(fa-search)</Button>
                    </Form>
                    <Form>
                        <Form.Row>
                            <p className='mr-4'>Filter By</p>
                            <Form.Group controlId="requiredTechSelect" className='mr-2'>
                                <Form.Control as="select" custom>
                                    <option>Required Technologies</option>
                                    {/* <option>
                                <input type='checkbox'>html</input>
                            </option>
                            <option>
                                <input type='checkbox'>html</input>
                            </option> */}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="difficultyLvlSelect" className='ml-2 mr-2'>
                                <Form.Control as="select" custom>
                                    <option value=''>Difficulty Level</option>
                                    <option value='1'>Easy</option>
                                    <option value='2'>Medium</option>
                                    <option value='3'>Hard</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="assetsSelect" className='ml-2'>
                                <Form.Control as="select" custom>
                                    <option value=''>Assets</option>
                                    <option value='1'>Included</option>
                                    <option value='0'>Not Included</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                    <Form>
                        <Form.Row>
                            <p className='mr-4'>Sort By</p>
                            <Form.Check
                                custom
                                inline
                                label="Most Popular"
                                type='radio'
                                id='most-popular-rb'
                            />
                            <Form.Check
                                custom
                                inline
                                label="Most Recent"
                                type='radio'
                                id='most-popular-rb'
                            />
                        </Form.Row>
                    </Form>
                </div>


                <div className='projectsExplore'>
                    <Row>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </Row>
                </div>
            </Container>
        </div>
    )
}
