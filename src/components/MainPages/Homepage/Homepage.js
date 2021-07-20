import React, { useContext } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { GrProjects } from "react-icons/gr"
import { BiDownload } from "react-icons/bi"
import { BsChatSquareDots } from "react-icons/bs"
import MyModal from '../../General/Modal/MyModal'
import userContext from '../../../utils/AuthContext'

export default function Homepage() {
    const context = useContext(userContext)
    return (
        <div className='homepage'>
            <Container fluid>
                <Row className='homepage-top'>
                    <div className='homepage-top-img d-flex align-items-center'>
                        <Container>
                            <p className='mb-3'>
                                Ran out of ideas for your next full stack project? <br />
                                Now, all you need to do is choose!
                            </p>
                        </Container>
                    </div>
                </Row>
            </Container>
            <Container className='p-3'>
                <Row className='mt-4'>
                    <Col md={4} sm={12} className='mb-3'>
                        <section>
                            <div className='white-bg-thumbnails rounded-circle d-flex mb-4'>
                                <GrProjects className='align-middle' />
                            </div>
                            <h3>
                                Choose A Project
                            </h3>
                            <p>Explore the projects in the Explore page<br /> and find the project you like</p>
                        </section>
                    </Col>
                    <Col md={4} sm={12} className='mb-3'>
                        <section>
                            <div className='white-bg-thumbnails rounded-circle d-flex mb-4'>
                                <BiDownload className='align-middle' />
                            </div>
                            <h3>
                                Download Assets
                            </h3>
                            <p>Download the Project's Assets<br />so you don't waste time looking for them online</p>
                        </section>
                    </Col>
                    <Col md={4} sm={12} className='mb-3'>
                        <section>
                            <div className='white-bg-thumbnails rounded-circle d-flex mb-4'>
                                <BsChatSquareDots className='align-middle' />
                            </div>
                            <h3>
                                Communicate With Others
                            </h3>
                            <p>Use the Project's Forum<br />to get help from the project's owner and others!
                            </p>
                        </section>
                    </Col>
                </Row>
                {!context.loggedUser.id && <MyModal type='signup' />}
            </Container>
        </div>
    )
}
