import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
// import CgTag from 'react-icons'
import { GrProjects } from "react-icons/gr"
import { BiDownload } from "react-icons/bi"
import { BsChatSquareDots } from "react-icons/bs"


export default function Homepage() {
    return (
        <div className='homepage'>
            <Container fluid>
                <Row className='homepage-top'>
                    <div className='homepage-top-img'>
                        <Container>
                            <h2 >
                                Start your Full Stack project now!<br />
                                Choose a project you like and start coding!
                            </h2>
                        </Container>
                    </div>
                </Row>
            </Container>
            <Container className='p-3'>
                <Row className='mt-4'>
                    <Col md={4} sm={12} className='mb-3'>
                        <section>
                            <div className='white-bg-thumbnails rounded-circle d-flex'>
                                <GrProjects className='align-middle' />
                            </div>
                            <h3>
                                Choose a Project
                            </h3>
                            <p>Explore the projects and build the one you like</p>
                        </section>
                    </Col>
                    <Col md={4} sm={12} className='mb-3'>
                        <section>
                            <div className='white-bg-thumbnails rounded-circle d-flex'>
                                <BiDownload className='align-middle' />
                            </div>
                            <h3>
                                Download Assets
                            </h3>
                            <p>Download the provided assets and save time</p>
                        </section>
                    </Col>
                    <Col md={4} sm={12} className='mb-3'>
                        <section>
                            <div className='white-bg-thumbnails rounded-circle d-flex'>
                                <BsChatSquareDots className='align-middle' />
                            </div>
                            <h3>
                                Communicate with others
                            </h3>
                            <p>Talk in the project's forum and help each other!</p>
                        </section>
                    </Col>
                </Row>
                <Button className='mt-5'>Sign Up</Button>
            </Container>
        </div>
    )
}
