import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { GrProjects } from "react-icons/gr"
import { BiDownload } from "react-icons/bi"
import { BsChatSquareDots } from "react-icons/bs"
import MyModal from '../../General/Modal/MyModal'


export default function Homepage() {
    return (
        <div className='homepage'>
            <Container fluid>
                <Row className='homepage-top'>
                    <div className='homepage-top-img d-flex align-items-center'>
                        <Container>
                            <h2>
                                Start Your Full Stack Project Now!<br />
                                Choose A Project You Like And Start Coding!
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
                                Choose A Project
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
                            <p>Download the provided assets to save time</p>
                        </section>
                    </Col>
                    <Col md={4} sm={12} className='mb-3'>
                        <section>
                            <div className='white-bg-thumbnails rounded-circle d-flex'>
                                <BsChatSquareDots className='align-middle' />
                            </div>
                            <h3>
                                Communicate With Others
                            </h3>
                            <p>Chat in the project's forum and help each other!</p>
                        </section>
                    </Col>
                </Row>
                <MyModal type='signup' />
            </Container>
        </div>
    )
}
