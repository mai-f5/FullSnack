import React from 'react'
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap'
import imgPlaceholder from '../images/img-placeholder.png'

export default function Homepage() {
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
                <h1>
                    Start your Full Stack project now!<br />
                    Choose a project you like and start coding!
                </h1>
                {/* <div className='img-fluid enviormentImg'></div> */}
                <img src={imgPlaceholder} alt='' className='img-fluid w-100' />
                <Row className='mt-4'>
                    <Col md={4} sm={12}>
                        <section>
                            <img src={imgPlaceholder} alt='' className='img-fluid' />
                            <h2>
                                Choose a Project
                            </h2>
                            <p>Explore the projects and build the one you like</p>
                        </section>
                    </Col>
                    <Col md={4} sm={12}>
                        <section>
                            <img src={imgPlaceholder} alt='' className='img-fluid' />
                            <h2>
                                Download Assets
                            </h2>
                            <p>Download the provided assets and save time</p>
                        </section>
                    </Col>
                    <Col md={4} sm={12}>
                        <section>
                            <img src={imgPlaceholder} alt='' className='img-fluid' />
                            <h2>
                                Communicate with others
                            </h2>
                            <p>Talk in the project's forum and help each other!</p>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Button className='mx-auto'>Sign Up</Button>
                </Row>
            </Container>
        </div>
    )
}
